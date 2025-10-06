import { IsEmail } from 'class-validator';

/**
 * Forgot Password DTO
 * Data transfer object for password reset request
 */
export class ForgotPasswordDto {
  /**
   * User's email address
   */
  @IsEmail()
  email!: string;
}
