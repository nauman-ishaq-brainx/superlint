import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

/**
 * JWT Strategy
 * Validates JWT tokens and extracts user information
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor with dependency injection
   *
   * @param {ConfigService} configService - Config service
   * @param {UsersService} usersService - Users service
   */
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')
    });
  }

  /**
   * Validate JWT payload
   * This is called by Passport after JWT is verified
   *
   * @param {any} payload - JWT payload (decoded token)
   * @returns {Promise<any>} User data to attach to request
   * @throws {UnauthorizedException} If user not found or invalid
   */
  async validate(payload: any): Promise<any> {
    // Validate payload structure
    if (!payload || !payload.sub || !payload.email) {
      throw new UnauthorizedException('Invalid token payload');
    }

    // Fetch user from database to verify they still exist
    const user = await this.usersService.findOne(payload.sub);

    if (!user) {
      throw new UnauthorizedException('User not found or deleted');
    }

    // Return user info to attach to request.user
    // Additional checks (isActive, isBlocked) are done in the Guard
    return {
      userId: payload.sub,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isEmailVerified: user.isEmailVerified
    };
  }
}
