import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

/**
 * JWT Utility Service
 * Handles JWT token generation, password hashing, and encryption utilities
 */
@Injectable()
export class JwtUtilityService {
  /**
   * Constructor with dependency injection
   *
   * @param {JwtService} jwtService - JWT service
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Generate JWT access token
   *
   * @param {string} userId - User ID
   * @param {string} email - User email
   * @returns {string} JWT token
   */
  generateToken(userId: string, email: string): string {
    const payload = { sub: userId, email };
    return this.jwtService.sign(payload);
  }

  /**
   * Verify JWT token
   *
   * @param {string} token - JWT token
   * @returns {any} Decoded token payload
   */
  verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }

  /**
   * Hash password using bcrypt
   *
   * @param {string} password - Plain text password
   * @param {number} saltRounds - Salt rounds (default 10)
   * @returns {Promise<string>} Hashed password
   */
  async hashPassword(password: string, saltRounds = 10): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }

  /**
   * Compare password with hash
   *
   * @param {string} password - Plain text password
   * @param {string} hash - Hashed password
   * @returns {Promise<boolean>} True if passwords match
   */
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Generate random password reset token
   *
   * @returns {string} Random token
   */
  generateResetToken(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15) +
      Date.now().toString(36)
    );
  }

  /**
   * Generate random string for various purposes
   *
   * @param {number} length - Length of random string
   * @returns {string} Random string
   */
  generateRandomString(length = 32): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
