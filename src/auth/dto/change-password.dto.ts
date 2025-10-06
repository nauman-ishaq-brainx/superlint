import { IsString, MinLength } from 'class-validator';

/**
 * Change Password DTO
 * Data transfer object for changing password when authenticated
 */
export class ChangePasswordDto {
  /**
   * Current password
   */
  @IsString()
  @MinLength(8)
  oldPassword!: string;

  /**
   * New password (minimum 8 characters)
   */
  @IsString()
  @MinLength(8)
  newPassword!: string;
}
