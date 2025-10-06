import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Root application controller
 * Handles base application routes
 */
@Controller()
export class AppController {
  /**
   * Constructor with dependency injection
   *
   * @param {AppService} appService - Application service
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Get application health status
   *
   * @returns {string} Health check message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Get application health information
   *
   * @returns {object} Health information object
   */
  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return this.appService.getHealth();
  }
}
