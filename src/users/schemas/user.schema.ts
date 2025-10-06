import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * User Schema
 * Mongoose schema for User collection
 */
@Schema({
  timestamps: true,
  collection: 'users'
})
export class User extends Document {
  /**
   * User's full name
   */
  @Prop({ required: true, trim: true })
  name!: string;

  /**
   * User's email address (unique)
   */
  @Prop({ required: true, lowercase: true, trim: true })
  email!: string;

  /**
   * User's hashed password
   */
  @Prop({ required: true, select: false })
  password!: string;

  /**
   * User's role in the system
   */
  @Prop({ default: 'user', enum: ['user', 'admin', 'moderator'] })
  role!: string;

  /**
   * Account active status
   */
  @Prop({ default: true })
  isActive!: boolean;

  /**
   * Email verified status
   */
  @Prop({ default: false })
  isEmailVerified!: boolean;

  /**
   * Password reset token
   */
  @Prop({ select: false })
  passwordResetToken?: string;

  /**
   * Password reset token expiry
   */
  @Prop({ select: false })
  passwordResetExpires?: Date;

  /**
   * Last login timestamp
   */
  @Prop()
  lastLogin?: Date;

  /**
   * Creation timestamp (auto-managed by timestamps)
   */
  createdAt!: Date;

  /**
   * Last update timestamp (auto-managed by timestamps)
   */
  updatedAt!: Date;
}

import * as bcrypt from 'bcrypt';

/**
 * User Mongoose Schema
 */
export const UserSchema = SchemaFactory.createForClass(User);

/**
 * Pre-save hook: Hash password before saving (for CREATE and UPDATE)
 * Only hash if password is modified or new
 */
UserSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

/**
 * Pre-update hook: Hash password before updating
 * Handles findOneAndUpdate, updateOne, etc.
 */
UserSchema.pre('findOneAndUpdate', async function (next) {
  const update: any = this.getUpdate();

  // Check if password is being updated
  if (update.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(update.password, salt);
      next();
    } catch (error: any) {
      next(error);
    }
  } else {
    next();
  }
});

/**
 * Instance method: Compare password for authentication
 *
 * @param {string} candidatePassword - Password to compare
 * @returns {Promise<boolean>} True if passwords match
 */
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

/**
 * Add indexes for better query performance
 */
UserSchema.index({ email: 1 });
UserSchema.index({ createdAt: -1 });

/**
 * Transform output - remove sensitive fields
 */
UserSchema.set('toJSON', {
  transform: (_doc, ret) => {
    // Destructure to exclude sensitive fields
    const {
      _id,
      __v,
      password,
      passwordResetToken,
      passwordResetExpires,
      ...sanitized
    } = ret;
    return { id: _id, ...sanitized };
  }
});
