import { Injectable } from '@nestjs/common';

/**
 * Root application service
 * Provides core application functionality
 */
@Injectable()
export class AppService {
  /**
   * Get hello message
   *
   * @returns {string} Welcome message
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Get application health information
   *
   * @returns {object} Health status object
   */
  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString()
    };
  }
}
