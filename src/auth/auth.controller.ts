import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Patch
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

/**
 * Authentication Controller
 * Handles authentication endpoints
 */
@Controller('auth')
export class AuthController {
  /**
   * Constructor with dependency injection
   *
   * @param {AuthService} authService - Auth service
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * User signup/registration
   *
   * @param {SignupDto} signupDto - Signup data
   * @returns {Promise<object>} User and access token
   */
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupDto: SignupDto): Promise<object> {
    return this.authService.signup(signupDto);
  }

  /**
   * User login
   *
   * @param {LoginDto} loginDto - Login credentials
   * @returns {Promise<object>} User and access token
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<object> {
    return this.authService.login(loginDto);
  }

  /**
   * Request password reset
   *
   * @param {ForgotPasswordDto} forgotPasswordDto - Email for reset
   * @returns {Promise<object>} Success message
   */
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(
    @Body() forgotPasswordDto: ForgotPasswordDto
  ): Promise<object> {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  /**
   * Reset password with token
   *
   * @param {ResetPasswordDto} resetPasswordDto - Reset token and new password
   * @returns {Promise<object>} Success message
   */
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(
    @Body() resetPasswordDto: ResetPasswordDto
  ): Promise<object> {
    return this.authService.resetPassword(resetPasswordDto);
  }

  /**
   * Change password (requires authentication)
   *
   * @param {Request} req - Express request with user
   * @param {ChangePasswordDto} changePasswordDto - Old and new passwords
   * @returns {Promise<object>} Success message
   */
  @Patch('change-password')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async changePassword(
    @Request() req: any,
    @Body() changePasswordDto: ChangePasswordDto
  ): Promise<object> {
    return this.authService.changePassword(req.user.userId, changePasswordDto);
  }

  /**
   * Get current user profile (requires authentication)
   *
   * @param {Request} req - Express request with user
   * @returns {object} Current user data
   */
  @Post('me')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getProfile(@Request() req: any): object {
    return req.user;
  }
}
