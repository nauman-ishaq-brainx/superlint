/**
 * TypeScript-Specific ESLint Configuration
 *
 * This file contains linting rules specifically for TypeScript code.
 * It focuses on:
 * - Type safety and strict typing
 * - TypeScript best practices
 * - Naming conventions for TypeScript constructs
 * - Modern TypeScript features usage
 *
 * These rules help maintain type safety and leverage TypeScript's full potential.
 */

module.exports = {
  // TypeScript-specific linting rules
  rules: {
    // Type Safety Rules
    '@typescript-eslint/no-explicit-any': 'error',
    // Prevents use of 'any' type - encourages proper typing

    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Warns when function return types are not explicitly declared

    '@typescript-eslint/no-unused-vars': 'error',
    // Prevents unused variables (TypeScript version of no-unused-vars)

    '@typescript-eslint/prefer-readonly': 'error',
    // Encourages use of readonly for properties that shouldn't be modified

    '@typescript-eslint/no-floating-promises': 'error',
    // Prevents promises that are not awaited or handled

    '@typescript-eslint/await-thenable': 'error',
    // Ensures await is only used with thenable values

    '@typescript-eslint/no-misused-promises': 'error',
    // Prevents misuse of promises in conditionals and loops

    '@typescript-eslint/require-await': 'warn',
    // Warns when async functions don't use await

    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Encourages use of ?? instead of || for null/undefined checks

    '@typescript-eslint/prefer-optional-chain': 'error',
    // Encourages use of ?. instead of && for property access

    '@typescript-eslint/no-non-null-assertion': 'warn',
    // Warns about use of ! operator (non-null assertion)

    '@typescript-eslint/prefer-as-const': 'error',
    // Encourages use of 'as const' for literal types

    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // Prevents unnecessary type assertions

    '@typescript-eslint/no-var-requires': 'error',
    // Prevents use of require() in TypeScript files

    '@typescript-eslint/consistent-type-imports': 'error',
    // Enforces consistent use of type imports

    '@typescript-eslint/consistent-type-exports': 'error',
    // Enforces consistent use of type exports

    // Naming Conventions for TypeScript Constructs
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'] // Interfaces should start with 'I'
      },
      {
        selector: 'class',
        format: ['PascalCase'] // Classes should be PascalCase
      },
      {
        selector: 'enum',
        format: ['PascalCase'] // Enums should be PascalCase
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'] // Enum members should be UPPER_CASE
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'] // Type aliases should be PascalCase
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'] // Variables can be camelCase or UPPER_CASE
      },
      {
        selector: 'function',
        format: ['camelCase'] // Functions should be camelCase
      },
      {
        selector: 'method',
        format: ['camelCase'] // Methods should be camelCase
      },
      {
        selector: 'parameter',
        format: ['camelCase'] // Parameters should be camelCase
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE'] // Properties can be camelCase or UPPER_CASE
      }
    ],

    // TypeScript-specific best practices
    '@typescript-eslint/prefer-function-type': 'error',
    // Prefers function types over interfaces with call signatures

    '@typescript-eslint/prefer-interface': 'off', // Disabled in favor of type aliases
    '@typescript-eslint/prefer-type-alias': 'error',
    // Prefers type aliases over interfaces when possible

    '@typescript-eslint/no-empty-interface': 'error',
    // Prevents empty interfaces

    '@typescript-eslint/no-extraneous-class': 'error',
    // Prevents classes that only contain static members

    '@typescript-eslint/no-inferrable-types': 'error',
    // Prevents explicit type annotations where TypeScript can infer

    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true, // Allow magic numbers in array indexes
        ignoreDefaultValues: true, // Allow magic numbers in default values
        ignoreNumericLiteralTypes: true, // Allow magic numbers in type literals
        ignoreEnums: true, // Allow magic numbers in enums
        ignoreReadonlyClassProperties: true // Allow magic numbers in readonly properties
      }
    ],

    // Strict type checking
    '@typescript-eslint/strict-boolean-expressions': 'error',
    // Ensures boolean expressions are properly typed

    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Can be too strict
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // Prevents unnecessary conditions that are always true/false

    '@typescript-eslint/no-unnecessary-type-arguments': 'error'
    // Prevents unnecessary type arguments in generic calls
  }
};
