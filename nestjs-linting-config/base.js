/**
 * Base ESLint Configuration for NestJS Projects
 *
 * This file contains the fundamental ESLint setup that all other configurations extend.
 * It includes:
 * - Basic environment settings (Node.js, ES6)
 * - TypeScript parser configuration
 * - Core plugins for linting
 * - Essential rule sets from recommended configurations
 *
 * This is the foundation that other config files build upon.
 */

module.exports = {
  // Environment settings - defines global variables available in different environments
  env: {
    node: true, // Node.js global variables (process, Buffer, require, etc.)
    es6: true // ES6 global variables (Set, Map, Promise, etc.)
  },

  // TypeScript parser configuration
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Path to TypeScript config file
    tsconfigRootDir: '.', // Root directory for TypeScript config
    ecmaVersion: 2020, // ECMAScript version to support
    sourceType: 'module' // Code is in module mode (import/export)
  },

  // ESLint plugins used for linting
  plugins: [
    '@typescript-eslint', // TypeScript-specific linting rules
    'import', // Import/export statement linting
    'security', // Security vulnerability detection
    'sonarjs', // Code quality and complexity analysis
    'jsdoc', // JSDoc documentation linting
    'promise', // Promise and async/await best practices
    'node', // Node.js specific rules
    'prettier' // Prettier integration with ESLint
  ],

  // Extended configurations - inherits rules from these presets
  extends: [
    'eslint:recommended', // ESLint's recommended rule set
    '@typescript-eslint/recommended', // TypeScript recommended rules
    '@typescript-eslint/recommended-requiring-type-checking', // TypeScript rules requiring type info
    'plugin:import/recommended', // Import/export best practices
    'plugin:import/typescript', // TypeScript import rules
    'plugin:security/recommended', // Security best practices
    'plugin:sonarjs/recommended', // Code quality rules
    'plugin:jsdoc/recommended', // Documentation requirements
    'plugin:promise/recommended', // Promise handling rules
    'plugin:node/recommended', // Node.js best practices
    'plugin:prettier/recommended' // Prettier formatting rules
  ]
};
