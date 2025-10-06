import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { JwtUtilityService } from './services/jwt-utility.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

/**
 * Authentication Service
 * Handles user authentication, JWT generation, and password management
 */
@Injectable()
export class AuthService {
  /**
   * Constructor with dependency injection
   *
   * @param {UsersService} usersService - Users service
   * @param {JwtUtilityService} jwtUtilityService - JWT utility service
   * @param {ConfigService} configService - Config service
   */
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtUtilityService: JwtUtilityService,
    private readonly configService: ConfigService
  ) {}

  /**
   * User signup/registration
   *
   * @param {SignupDto} signupDto - Signup data
   * @returns {Promise<object>} User and access token
   * @throws {BadRequestException} If email already exists
   */
  async signup(signupDto: SignupDto): Promise<object> {
    const existingUser = await this.usersService.findByEmail(signupDto.email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    // Password will be hashed automatically by Mongoose pre-save hook
    const user = await this.usersService.create(signupDto);

    const token = this.jwtUtilityService.generateToken(
      (user as any)._id.toString(),
      user.email
    );

    return {
      user: this.sanitizeUser(user),
      accessToken: token
    };
  }

  /**
   * User login
   *
   * @param {LoginDto} loginDto - Login credentials
   * @returns {Promise<object>} User and access token
   * @throws {UnauthorizedException} If credentials invalid
   */
  async login(loginDto: LoginDto): Promise<object> {
    const user = await this.usersService.findByEmailWithPassword(
      loginDto.email
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Use Mongoose method to compare password
    const isPasswordValid = await (user as any).comparePassword(
      loginDto.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    await this.usersService.updateLastLogin((user as any)._id.toString());

    const token = this.jwtUtilityService.generateToken(
      (user as any)._id.toString(),
      user.email
    );

    return {
      user: this.sanitizeUser(user),
      accessToken: token
    };
  }

  /**
   * Validate user (used by Passport strategies)
   *
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<any>} User object if valid
   */
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmailWithPassword(email);
    if (user && (await (user as any).comparePassword(password))) {
      return user;
    }
    return null;
  }

  /**
   * Request password reset
   *
   * @param {ForgotPasswordDto} forgotPasswordDto - Email for reset
   * @returns {Promise<object>} Success message
   */
  async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<object> {
    const user = await this.usersService.findByEmail(forgotPasswordDto.email);

    if (!user) {
      return { message: 'If email exists, reset link has been sent' };
    }

    const resetToken = this.generateResetToken();
    const resetExpires = new Date(
      Date.now() +
        parseInt(this.configService.get<string>('PASSWORD_RESET_EXPIRES_IN')!)
    );

    await this.usersService.setPasswordResetToken(
      (user as any)._id.toString(),
      resetToken,
      resetExpires
    );

    // TODO: Send email with reset token
    // For now, return token in response (remove in production)
    return {
      message: 'Password reset link sent to email',
      resetToken // Remove this in production
    };
  }

  /**
   * Generate password reset token
   *
   * @returns {string} Random reset token
   */
  private generateResetToken(): string {
    return this.jwtUtilityService.generateResetToken();
  }

  /**
   * Reset password with token
   *
   * @param {ResetPasswordDto} resetPasswordDto - Reset token and new password
   * @returns {Promise<object>} Success message
   * @throws {BadRequestException} If token invalid or expired
   */
  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<object> {
    const user = await this.usersService.findByResetToken(
      resetPasswordDto.resetToken
    );

    if (!user) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    // Password will be hashed automatically by pre-save hook
    await this.usersService.updatePassword(
      (user as any)._id.toString(),
      resetPasswordDto.password
    );

    return { message: 'Password reset successful' };
  }

  /**
   * Change password for authenticated user
   *
   * @param {string} userId - User ID
   * @param {ChangePasswordDto} changePasswordDto - Old and new passwords
   * @returns {Promise<object>} Success message
   * @throws {UnauthorizedException} If old password incorrect
   */
  async changePassword(
    userId: string,
    changePasswordDto: ChangePasswordDto
  ): Promise<object> {
    const user = await this.usersService.findByIdWithPassword(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Use Mongoose method to compare password
    const isOldPasswordValid = await (user as any).comparePassword(
      changePasswordDto.oldPassword
    );

    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Password will be hashed automatically by pre-save hook
    await this.usersService.updatePassword(
      userId,
      changePasswordDto.newPassword
    );

    return { message: 'Password changed successfully' };
  }
  /**
   * Remove sensitive data from user object
   *
   * @param {any} user - User object
   * @returns {object} Sanitized user
   */
  private sanitizeUser(user: any): object {
    const userObj = user.toObject ? user.toObject() : user;
    delete userObj.password;
    delete userObj.passwordResetToken;
    delete userObj.passwordResetExpires;
    return userObj;
  }
}
