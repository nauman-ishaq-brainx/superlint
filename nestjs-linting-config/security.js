/**
 * Security-Focused ESLint Configuration
 *
 * This file contains linting rules focused on security best practices.
 * It includes:
 * - Vulnerability detection
 * - Secure coding practices
 * - Input validation requirements
 * - Authentication and authorization patterns
 *
 * These rules help prevent common security vulnerabilities in Node.js/NestJS applications.
 */

module.exports = {
  // Security-specific linting rules
  rules: {
    // Object Injection Prevention
    'security/detect-object-injection': 'warn',
    // Warns about potential object injection vulnerabilities

    'security/detect-non-literal-regexp': 'error',
    // Prevents use of non-literal regular expressions that could lead to ReDoS

    'security/detect-unsafe-regex': 'error',
    // Detects potentially unsafe regular expressions

    'security/detect-buffer-noassert': 'error',
    // Prevents use of Buffer methods with noAssert option

    'security/detect-eval-with-expression': 'error',
    // Prevents use of eval() with expressions

    'security/detect-no-csrf-before-method-override': 'error',
    // Ensures CSRF protection is applied before method override

    'security/detect-possible-timing-attacks': 'warn',
    // Warns about potential timing attack vulnerabilities

    'security/detect-non-literal-fs-filename': 'warn',
    // Warns about non-literal file system operations

    'security/detect-pseudoRandomBytes': 'error',
    // Prevents use of pseudo-random bytes for security purposes

    'security/detect-child-process': 'warn',
    // Warns about child process execution

    'security/detect-disable-mustache-escape': 'error',
    // Prevents disabling mustache escaping

    'security/detect-new-buffer': 'error',
    // Prevents use of deprecated Buffer constructor

    // General Security Rules
    'no-eval': 'error',
    // Prevents use of eval() function

    'no-implied-eval': 'error',
    // Prevents implied eval() usage (setTimeout/setInterval with strings)

    'no-new-func': 'error',
    // Prevents use of Function constructor

    'no-script-url': 'error',
    // Prevents javascript: URLs

    'no-alert': 'error',
    // Prevents use of alert, confirm, prompt

    'no-console': 'error',
    // Prevents console statements in production code

    'no-debugger': 'error',
    // Prevents debugger statements

    // Input Validation and Sanitization
    'no-unsafe-finally': 'error',
    // Prevents unsafe finally blocks

    'no-unsafe-negation': 'error',
    // Prevents unsafe negation in comparisons

    'no-unsafe-optional-chaining': 'error',
    // Prevents unsafe optional chaining

    // Authentication and Authorization Patterns
    'no-global-assign': 'error',
    // Prevents assignment to global variables

    'no-implicit-globals': 'error',
    // Prevents implicit global variables

    'no-proto': 'error',
    // Prevents use of __proto__ property

    'no-iterator': 'error',
    // Prevents use of __iterator__ property

    'no-caller': 'error',
    // Prevents use of arguments.caller

    'no-arguments': 'error',
    // Prevents use of arguments object

    // Data Protection
    'no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreReadonlyClassProperties: true,
        ignoreNumericLiteralTypes: true,
        detectObjects: false // Allow magic numbers in object properties
      }
    ],

    // Secure Coding Practices
    'prefer-const': 'error',
    // Prefers const for variables that are never reassigned

    'no-var': 'error',
    // Prevents use of var declarations

    'no-redeclare': 'error',
    // Prevents variable redeclaration

    'no-undef': 'error',
    // Prevents use of undeclared variables

    'no-unused-vars': 'off', // Use TypeScript version instead
    '@typescript-eslint/no-unused-vars': 'error',

    // Error Handling Security
    'no-throw-literal': 'error',
    // Prevents throwing literals as errors

    'prefer-promise-reject-errors': 'error',
    // Ensures Promise rejections are Error objects

    'no-async-promise-executor': 'error',
    // Prevents async promise executors

    'require-atomic-updates': 'error',
    // Prevents race conditions in async operations

    // File System Security
    'no-path-concat': 'error',
    // Prevents unsafe path concatenation

    'no-process-env': 'warn',
    // Warns about direct process.env access (use config service instead)

    'no-process-exit': 'error',
    // Prevents direct process.exit() calls

    // Network Security
    'no-http-url': 'error',
    // Prevents HTTP URLs (use HTTPS)

    'no-mixed-operators': 'error',
    // Prevents mixed operators without parentheses

    'no-multi-assign': 'error',
    // Prevents multiple assignments in single statement

    'no-nested-ternary': 'error',
    // Prevents nested ternary operators

    'no-new-object': 'error',
    // Prevents Object constructor usage

    'no-new-require': 'error',
    // Prevents new require() usage

    'no-new-wrappers': 'error',
    // Prevents new wrapper object usage

    'no-octal-escape': 'error',
    // Prevents octal escape sequences

    'no-param-reassign': 'error',
    // Prevents parameter reassignment

    'no-plusplus': 'off', // Allow ++ and -- operators

    'no-restricted-globals': [
      'error',
      'event', // Prevent use of global 'event'
      'fdescribe', // Prevent focused tests in production
      'fit' // Prevent focused tests in production
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message:
              'Relative imports are not allowed. Use absolute imports instead.'
          }
        ]
      }
    ],

    'no-restricted-modules': [
      'error',
      {
        patterns: [
          {
            group: ['fs'],
            message: 'Use NestJS FileService instead of direct fs module.'
          }
        ]
      }
    ],

    'no-restricted-properties': [
      'error',
      {
        object: 'process',
        property: 'exit',
        message: 'Use NestJS application shutdown instead of process.exit().'
      }
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="eval"]',
        message: 'eval() is not allowed for security reasons.'
      },
      {
        selector:
          'CallExpression[callee.name="setTimeout"][arguments.0.type="Literal"]',
        message:
          'setTimeout with string argument is not allowed. Use function instead.'
      },
      {
        selector:
          'CallExpression[callee.name="setInterval"][arguments.0.type="Literal"]',
        message:
          'setInterval with string argument is not allowed. Use function instead.'
      }
    ]
  }
};
