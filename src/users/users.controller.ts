import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Roles, Role } from '../common/decorators/roles.decorator';

/**
 * Users Controller
 * Handles user-related HTTP requests
 * All routes are protected with JWT authentication
 */
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  /**
   * Constructor with dependency injection
   *
   * @param {UsersService} usersService - Users service
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a new user
   *
   * @param {CreateUserDto} createUserDto - User creation data
   * @returns {Promise<object>} Created user
   */
  @Post()
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<object> {
    return this.usersService.create(createUserDto);
  }

  /**
   * Get all users
   *
   * @returns {Promise<object[]>} Array of users
   */
  @Get()
  @Roles(Role.ADMIN, Role.MODERATOR)
  async findAll(): Promise<object[]> {
    return this.usersService.findAll();
  }

  /**
   * Get user by ID
   *
   * @param {string} id - User ID
   * @returns {Promise<object>} User object
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<object> {
    return this.usersService.findOne(id);
  }

  /**
   * Update user by ID
   *
   * @param {string} id - User ID
   * @param {UpdateUserDto} updateUserDto - Update data
   * @returns {Promise<object>} Updated user
   */
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<object> {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Delete user by ID
   *
   * @param {string} id - User ID
   * @returns {Promise<void>}
   */
  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
