import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JWT Authentication Guard
 * Protects routes requiring JWT authentication
 * Checks user status (blocked/inactive) before allowing access
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Can activate - validates JWT and checks user status
   *
   * @param {ExecutionContext} context - Execution context
   * @returns {Promise<boolean>} True if user can access route
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Call parent guard to validate JWT
    const isValid = await super.canActivate(context);

    if (!isValid) {
      throw new UnauthorizedException('Invalid token');
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Additional user status checks
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Check if user is blocked (isActive field)
    if (user.isActive === false) {
      throw new ForbiddenException(
        'Your account has been blocked. Please contact an administrator.'
      );
    }

    return true;
  }

  /**
   * Handle request - extract token from Authorization header
   *
   * @param {any} err - Error if any
   * @param {any} user - User object
   * @param {any} info - Additional info
   * @returns {any} User object
   */
  handleRequest(err: any, user: any, info: any): any {
    // Handle token errors
    if (err || !user) {
      if (info?.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token has expired');
      }
      if (info?.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid token');
      }
      if (info?.message === 'No auth token') {
        throw new UnauthorizedException('No token provided');
      }
      throw err || new UnauthorizedException('Authentication failed');
    }

    return user;
  }
}
