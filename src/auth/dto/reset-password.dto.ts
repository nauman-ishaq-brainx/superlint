import { IsString, MinLength } from 'class-validator';

/**
 * Reset Password DTO
 * Data transfer object for password reset with token
 */
export class ResetPasswordDto {
  /**
   * Password reset token
   */
  @IsString()
  resetToken!: string;

  /**
   * New password (minimum 8 characters)
   */
  @IsString()
  @MinLength(8)
  password!: string;
}
