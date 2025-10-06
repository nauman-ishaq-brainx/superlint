import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

/**
 * Bootstrap the NestJS application
 *
 * @returns {Promise<void>} Application startup promise
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // API prefix
  const apiPrefix = configService.get<string>('API_PREFIX') ?? 'api/v1';
  app.setGlobalPrefix(apiPrefix);

  // Global validation pipe for DTO validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  // Global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Global interceptors
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Enable CORS
  const corsEnabled = configService.get<string>('CORS_ENABLED') === 'true';
  if (corsEnabled) {
    const corsOrigin = configService.get<string>('CORS_ORIGIN')?.split(',') ?? [
      'http://localhost:3000'
    ];
    app.enableCors({
      origin: corsOrigin,
      credentials: true
    });
  }

  const port = configService.get<number>('PORT') ?? 5000;
  await app.listen(port);
}

bootstrap();
