import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

/**
 * Local Strategy
 * Validates username/password for local authentication
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor with dependency injection
   *
   * @param {AuthService} authService - Auth service
   */
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  /**
   * Validate user credentials
   *
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<any>} User object if valid
   * @throws {UnauthorizedException} If credentials invalid
   */
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
