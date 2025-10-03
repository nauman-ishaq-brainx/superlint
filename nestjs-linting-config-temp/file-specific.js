/**
 * File-Specific ESLint Configuration
 *
 * This file contains linting rules that apply to specific file types or patterns.
 * It includes:
 * - Controller-specific rules
 * - Service-specific rules
 * - Module-specific rules
 * - DTO/Entity-specific rules
 * - Test file rules
 *
 * These rules ensure different types of files follow their specific best practices.
 */

module.exports = {
  // File-specific rule overrides
  overrides: [
    {
      // Controller Files - Handle HTTP requests
      files: ['**/*.controller.ts'],
      rules: {
        'max-lines': ['error', { max: 200 }], // Controllers should be concise
        'max-params': ['error', 3], // Limit controller method parameters
        'jsdoc/require-jsdoc': 'error', // Require documentation for public APIs
        'sonarjs/cognitive-complexity': ['error', 10], // Lower complexity for controllers
        'max-lines-per-function': ['error', 20], // Controller methods should be short
        'max-depth': ['error', 3], // Limit nesting in controllers
        'no-magic-numbers': 'off', // Allow magic numbers in controllers
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'method',
            format: ['camelCase'] // Controller methods should be camelCase
          }
        ]
      }
    },

    {
      // Service Files - Business logic
      files: ['**/*.service.ts'],
      rules: {
        'max-lines': ['error', { max: 300 }], // Services can be longer
        'max-lines-per-function': ['error', 30], // Service methods can be longer
        'jsdoc/require-jsdoc': 'error', // Require documentation for business logic
        'sonarjs/cognitive-complexity': ['error', 15], // Higher complexity allowed for services
        'max-params': ['error', 4], // More parameters allowed for services
        'max-depth': ['error', 4], // More nesting allowed for services
        'no-magic-numbers': 'warn', // Warn about magic numbers
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'method',
            format: ['camelCase'] // Service methods should be camelCase
          }
        ]
      }
    },

    {
      // Module Files - Dependency injection configuration
      files: ['**/*.module.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Modules should be concise
        'max-params': ['error', 2], // Limit module method parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for modules
        'sonarjs/cognitive-complexity': ['error', 5], // Very low complexity for modules
        'max-lines-per-function': ['error', 10], // Module methods should be very short
        'max-depth': ['error', 2], // Limit nesting in modules
        'no-magic-numbers': 'off', // Allow magic numbers in modules
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error' // Use ?. operator
      }
    },

    {
      // DTO Files - Data Transfer Objects
      files: ['**/*.dto.ts'],
      rules: {
        'max-lines': ['error', { max: 50 }], // DTOs should be very concise
        'max-params': ['error', 1], // Limit DTO method parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for DTOs
        'sonarjs/cognitive-complexity': ['error', 3], // Very low complexity for DTOs
        'max-lines-per-function': ['error', 5], // DTO methods should be very short
        'max-depth': ['error', 1], // No nesting in DTOs
        'no-magic-numbers': 'off', // Allow magic numbers in DTOs
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // DTO classes should be PascalCase
            suffix: ['Dto'] // DTO classes should end with 'Dto'
          }
        ]
      }
    },

    {
      // Entity Files - Database entities
      files: ['**/*.entity.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Entities should be concise
        'max-params': ['error', 1], // Limit entity method parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for entities
        'sonarjs/cognitive-complexity': ['error', 3], // Very low complexity for entities
        'max-lines-per-function': ['error', 5], // Entity methods should be very short
        'max-depth': ['error', 1], // No nesting in entities
        'no-magic-numbers': 'off', // Allow magic numbers in entities
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // Entity classes should be PascalCase
            suffix: ['Entity'] // Entity classes should end with 'Entity'
          }
        ]
      }
    },

    {
      // Guard Files - Authentication and authorization
      files: ['**/*.guard.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Guards should be concise
        'max-params': ['error', 2], // Limit guard method parameters
        'jsdoc/require-jsdoc': 'error', // Require documentation for guards
        'sonarjs/cognitive-complexity': ['error', 8], // Low complexity for guards
        'max-lines-per-function': ['error', 15], // Guard methods should be short
        'max-depth': ['error', 3], // Limit nesting in guards
        'no-magic-numbers': 'warn', // Warn about magic numbers
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // Guard classes should be PascalCase
            suffix: ['Guard'] // Guard classes should end with 'Guard'
          }
        ]
      }
    },

    {
      // Interceptor Files - Request/response transformation
      files: ['**/*.interceptor.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Interceptors should be concise
        'max-params': ['error', 2], // Limit interceptor method parameters
        'jsdoc/require-jsdoc': 'error', // Require documentation for interceptors
        'sonarjs/cognitive-complexity': ['error', 8], // Low complexity for interceptors
        'max-lines-per-function': ['error', 15], // Interceptor methods should be short
        'max-depth': ['error', 3], // Limit nesting in interceptors
        'no-magic-numbers': 'warn', // Warn about magic numbers
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // Interceptor classes should be PascalCase
            suffix: ['Interceptor'] // Interceptor classes should end with 'Interceptor'
          }
        ]
      }
    },

    {
      // Pipe Files - Data validation and transformation
      files: ['**/*.pipe.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Pipes should be concise
        'max-params': ['error', 2], // Limit pipe method parameters
        'jsdoc/require-jsdoc': 'error', // Require documentation for pipes
        'sonarjs/cognitive-complexity': ['error', 8], // Low complexity for pipes
        'max-lines-per-function': ['error', 15], // Pipe methods should be short
        'max-depth': ['error', 3], // Limit nesting in pipes
        'no-magic-numbers': 'warn', // Warn about magic numbers
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // Pipe classes should be PascalCase
            suffix: ['Pipe'] // Pipe classes should end with 'Pipe'
          }
        ]
      }
    },

    {
      // Test Files - Unit and integration tests
      files: ['**/*.test.ts', '**/*.spec.ts'],
      rules: {
        'max-lines': ['error', { max: 200 }], // Test files can be longer
        'max-params': ['error', 3], // Limit test method parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for tests
        'sonarjs/cognitive-complexity': ['error', 20], // Higher complexity allowed for tests
        'max-lines-per-function': ['error', 50], // Test methods can be longer
        'max-depth': ['error', 5], // More nesting allowed for tests
        'no-magic-numbers': 'off', // Allow magic numbers in tests
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'warn', // Allow console statements in tests
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'warn', // Warn about any types in tests
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'method',
            format: ['camelCase'] // Test methods should be camelCase
          }
        ]
      }
    },

    {
      // Main Application File - Application entry point
      files: ['src/main.ts'],
      rules: {
        'max-lines': ['error', { max: 50 }], // Main file should be very concise
        'max-params': ['error', 1], // Limit main function parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for main
        'sonarjs/cognitive-complexity': ['error', 5], // Very low complexity for main
        'max-lines-per-function': ['error', 10], // Main functions should be very short
        'max-depth': ['error', 2], // Limit nesting in main
        'no-magic-numbers': 'off', // Allow magic numbers in main
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error' // Use ?. operator
      }
    },

    {
      // Configuration Files - App configuration
      files: ['src/**/*.config.ts', 'src/**/*.configuration.ts'],
      rules: {
        'max-lines': ['error', { max: 100 }], // Config files should be concise
        'max-params': ['error', 2], // Limit config method parameters
        'jsdoc/require-jsdoc': 'off', // No documentation required for config
        'sonarjs/cognitive-complexity': ['error', 5], // Very low complexity for config
        'max-lines-per-function': ['error', 10], // Config methods should be very short
        'max-depth': ['error', 2], // Limit nesting in config
        'no-magic-numbers': 'off', // Allow magic numbers in config
        'prefer-const': 'error', // Use const for non-reassigned variables
        'no-var': 'error', // No var declarations
        'no-console': 'error', // No console statements
        'no-debugger': 'error', // No debugger statements
        'consistent-return': 'error', // Consistent return statements
        'no-return-await': 'error', // No unnecessary return await
        'prefer-promise-reject-errors': 'error', // Proper error objects
        'require-await': 'off', // Use TypeScript version
        '@typescript-eslint/require-await': 'warn', // Warn about async without await
        '@typescript-eslint/explicit-function-return-type': 'off', // No return types required
        '@typescript-eslint/no-explicit-any': 'error', // No any types
        '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
        '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
        '@typescript-eslint/await-thenable': 'error', // Await only thenables
        '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
        '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'], // Config classes should be PascalCase
            suffix: ['Config', 'Configuration'] // Config classes should end with 'Config' or 'Configuration'
          }
        ]
      }
    }
  ]
};
