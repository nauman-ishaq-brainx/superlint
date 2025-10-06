import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Role enumeration
 * Defines available user roles in the system
 */
export enum Role {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator'
}

/**
 * Roles decorator
 * Used to specify required roles for route handlers
 *
 * @param {Role[]} roles - Array of required roles
 * @returns {CustomDecorator} Metadata decorator
 *
 * @example
 * @Roles(Role.ADMIN)
 * @Get('admin-only')
 * adminRoute() { ... }
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
