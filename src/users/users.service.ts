import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

/**
 * Users Service
 * Business logic for user management with MongoDB
 */
@Injectable()
export class UsersService {
  /**
   * Constructor with Mongoose model injection
   *
   * @param {Model<User>} userModel - Injected User model
   */
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  /**
   * Create a new user
   *
   * @param {CreateUserDto} createUserDto - User creation data
   * @returns {Promise<User>} Created user
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  /**
   * Get all users with pagination
   *
   * @param {number} limit - Number of results per page
   * @param {number} skip - Number of results to skip
   * @returns {Promise<User[]>} Array of users
   */
  async findAll(limit = 10, skip = 0): Promise<User[]> {
    return this.userModel
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 })
      .exec();
  }

  /**
   * Find user by ID
   *
   * @param {string} id - User ID
   * @returns {Promise<User>} User object
   * @throws {NotFoundException} If user not found
   */
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Find user by email
   *
   * @param {string} email - User email
   * @returns {Promise<User | null>} User object or null
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Find user by email with password (for authentication)
   *
   * @param {string} email - User email
   * @returns {Promise<User | null>} User object with password or null
   */
  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).select('+password').exec();
  }

  /**
   * Find user by ID with password
   *
   * @param {string} id - User ID
   * @returns {Promise<User | null>} User object with password or null
   */
  async findByIdWithPassword(id: string): Promise<User | null> {
    return this.userModel.findById(id).select('+password').exec();
  }

  /**
   * Update last login timestamp
   *
   * @param {string} id - User ID
   * @returns {Promise<void>}
   */
  async updateLastLogin(id: string): Promise<void> {
    await this.userModel
      .findByIdAndUpdate(id, { lastLogin: new Date() })
      .exec();
  }

  /**
   * Set password reset token
   *
   * @param {string} id - User ID
   * @param {string} token - Reset token
   * @param {Date} expires - Token expiry date
   * @returns {Promise<void>}
   */
  async setPasswordResetToken(
    id: string,
    token: string,
    expires: Date
  ): Promise<void> {
    await this.userModel
      .findByIdAndUpdate(id, {
        passwordResetToken: token,
        passwordResetExpires: expires
      })
      .exec();
  }

  /**
   * Find user by password reset token
   *
   * @param {string} token - Reset token
   * @returns {Promise<User | null>} User object or null
   */
  async findByResetToken(token: string): Promise<User | null> {
    return this.userModel
      .findOne({
        passwordResetToken: token,
        passwordResetExpires: { $gt: new Date() }
      })
      .exec();
  }

  /**
   * Update user password and clear reset token
   * Password will be hashed automatically by pre-save hook
   *
   * @param {string} id - User ID
   * @param {string} newPassword - New plain password (will be hashed by hook)
   * @returns {Promise<void>}
   */
  async updatePassword(id: string, newPassword: string): Promise<void> {
    const user = await this.userModel.findById(id);
    if (user) {
      user.password = newPassword;
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save(); // This triggers the pre-save hook
    }
  }

  /**
   * Update user by ID
   *
   * @param {string} id - User ID
   * @param {UpdateUserDto} updateUserDto - Update data
   * @returns {Promise<User>} Updated user
   * @throws {NotFoundException} If user not found
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  /**
   * Delete user by ID
   *
   * @param {string} id - User ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If user not found
   */
  async remove(id: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  /**
   * Count total users
   *
   * @returns {Promise<number>} Total user count
   */
  async count(): Promise<number> {
    return this.userModel.countDocuments().exec();
  }
}
