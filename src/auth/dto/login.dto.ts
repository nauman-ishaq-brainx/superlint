import { IsEmail, IsString, MinLength } from 'class-validator';

/**
 * Login DTO
 * Data transfer object for user login
 */
export class LoginDto {
  /**
   * User's email address
   */
  @IsEmail()
  email!: string;

  /**
   * User's password
   */
  @IsString()
  @MinLength(8)
  password!: string;
}
