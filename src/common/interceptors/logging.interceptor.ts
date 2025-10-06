import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logging Interceptor
 * Logs request and response information for all routes
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  /**
   * Intercept incoming requests
   *
   * @param {ExecutionContext} context - Execution context
   * @param {CallHandler} next - Next handler in chain
   * @returns {Observable<any>} Observable stream
   */
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    // const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        // Optionally log request details
        // Uncomment below for debugging
        // const request = _context.switchToHttp().getRequest();
        // const response = _context.switchToHttp().getResponse();
        // const delay = Date.now() - now;
        // console.log(`${request.method} ${request.url} ${response.statusCode} - ${delay}ms`);
      })
    );
  }
}
