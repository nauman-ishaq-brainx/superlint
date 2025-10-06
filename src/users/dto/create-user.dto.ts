import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

/**
 * Data Transfer Object for creating a user
 */
export class CreateUserDto {
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
   * User's password
   */
  @IsString()
  @MinLength(8)
  password!: string;

  /**
   * User's role
   */
  @IsString()
  @IsOptional()
  role?: string;
}
