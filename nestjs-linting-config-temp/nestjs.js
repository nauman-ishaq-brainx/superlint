/**
 * NestJS-Specific ESLint Configuration
 *
 * This file contains linting rules specifically designed for NestJS applications.
 * It extends the base configuration and adds:
 * - NestJS architecture-specific rules
 * - Dependency injection validation
 * - API documentation requirements
 * - Controller and service best practices
 *
 * These rules ensure your NestJS code follows framework conventions and best practices.
 */

module.exports = {
  // Extends the base configuration
  extends: [
    './base.js', // Base configuration with core setup
    'plugin:@darraghor/nestjs-typed/recommended' // NestJS-specific recommended rules
  ],

  // NestJS-specific plugins
  plugins: [
    '@darraghor/nestjs-typed' // Official NestJS ESLint plugin
  ],

  // NestJS-specific linting rules
  rules: {
    // Dependency Injection Rules
    '@darraghor/nestjs-typed/injectable-should-be-provided': 'error',
    // Ensures all @Injectable() classes are provided in a module

    '@darraghor/nestjs-typed/controllers-should-supply-api-tags': 'warn',
    // Warns if controllers don't have @ApiTags() decorator for Swagger documentation

    '@darraghor/nestjs-typed/api-property-matches-property-optionality':
      'error',
    // Ensures @ApiProperty() decorators match the actual property optionality

    '@darraghor/nestjs-typed/validated-non-primitive-property-type': 'error',
    // Validates that non-primitive properties in DTOs have proper validation

    '@darraghor/nestjs-typed/use-validation-pipe': 'error',
    // Enforces use of ValidationPipe for request validation

    '@darraghor/nestjs-typed/param-decorator-name-matches-route-param': 'error',
    // Ensures parameter decorator names match route parameter names

    '@darraghor/nestjs-typed/api-method-should-specify-api-response': 'warn',
    // Warns if API methods don't specify @ApiResponse() decorators

    '@darraghor/nestjs-typed/api-method-should-specify-api-operation': 'warn',
    // Warns if API methods don't specify @ApiOperation() decorators

    '@darraghor/nestjs-typed/controller-decorators-have-suffix': 'error',
    // Ensures controllers have proper naming conventions

    '@darraghor/nestjs-typed/service-decorators-have-suffix': 'error',
    // Ensures services have proper naming conventions

    '@darraghor/nestjs-typed/module-decorators-have-suffix': 'error',
    // Ensures modules have proper naming conventions

    '@darraghor/nestjs-typed/provider-inject-should-match-factory': 'error',
    // Ensures provider injection tokens match factory parameters

    '@darraghor/nestjs-typed/no-forward-ref': 'error',
    // Prevents use of forwardRef() which can indicate circular dependencies

    '@darraghor/nestjs-typed/no-single-decorator': 'error'
    // Prevents single decorator usage without proper context
  }
};
