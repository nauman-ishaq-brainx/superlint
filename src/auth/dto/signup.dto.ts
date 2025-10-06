import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

/**
 * Signup DTO
 * Data transfer object for user registration
 */
export class SignupDto {
  /**
   * User's full name
   */
  @IsString()
  @MinLength(2)
  name!: string;

  /**
   * User's email address
   */
  @IsEmail()
  email!: string;

  /**
   * User's password (minimum 8 characters)
   */
  @IsString()
  @MinLength(8)
  password!: string;

  /**
   * User's role (optional, defaults to 'user')
   */
  @IsString()
  @IsOptional()
  role?: string;
}
