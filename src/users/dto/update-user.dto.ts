import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * Data Transfer Object for updating a user
 * Extends CreateUserDto with all fields optional
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
