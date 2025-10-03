/**
 * Code Quality ESLint Configuration
 *
 * This file contains linting rules focused on code quality and maintainability.
 * It includes:
 * - Code complexity management
 * - Performance optimization
 * - Best practices enforcement
 * - Code maintainability rules
 *
 * These rules help maintain high-quality, maintainable, and performant code.
 */

module.exports = {
  // Code quality specific linting rules
  rules: {
    // Code Complexity Management
    'sonarjs/cognitive-complexity': ['error', 15],
    // Limits cognitive complexity to 15 (how hard code is to understand)

    'sonarjs/no-duplicate-string': ['error', 3],
    // Prevents duplicate strings (more than 3 occurrences)

    'sonarjs/no-identical-functions': 'error',
    // Prevents identical functions

    'sonarjs/no-collapsible-if': 'error',
    // Prevents collapsible if statements

    'sonarjs/no-redundant-boolean': 'error',
    // Prevents redundant boolean expressions

    'sonarjs/no-unused-collection': 'error',
    // Prevents unused collections

    'sonarjs/prefer-immediate-return': 'error',
    // Prefers immediate return over variable assignment

    'sonarjs/no-identical-expressions': 'error',
    // Prevents identical expressions in conditions

    'sonarjs/no-redundant-jump': 'error',
    // Prevents redundant jump statements

    'sonarjs/no-small-switch': 'error',
    // Prevents small switch statements (use if-else instead)

    'sonarjs/no-use-of-empty-return-value': 'error',
    // Prevents use of empty return values

    'sonarjs/prefer-single-boolean-return': 'error',
    // Prefers single boolean return over if-else

    'sonarjs/prefer-while': 'error',
    // Prefers while loops over for loops when appropriate

    'sonarjs/no-gratuitous-expressions': 'error',
    // Prevents gratuitous expressions

    'sonarjs/no-inverted-boolean-check': 'error',
    // Prevents inverted boolean checks

    'sonarjs/no-nested-switch': 'error',
    // Prevents nested switch statements

    'sonarjs/no-nested-template-literals': 'error',
    // Prevents nested template literals

    'sonarjs/no-redundant-parentheses': 'error',
    // Prevents redundant parentheses

    'sonarjs/no-unthrown-error': 'error',
    // Prevents unthrown errors

    'sonarjs/no-useless-catch': 'error',
    // Prevents useless catch blocks

    'sonarjs/prefer-object-literal': 'error',
    // Prefers object literals over Object constructors

    'sonarjs/prefer-optional-chain': 'error',
    // Prefers optional chaining over && checks

    'sonarjs/prefer-template': 'error',
    // Prefers template literals over string concatenation

    // General Code Quality Rules
    complexity: ['error', 15],
    // Limits cyclomatic complexity to 15

    'max-lines': ['error', 300],
    // Limits file length to 300 lines

    'max-lines-per-function': ['error', 50],
    // Limits function length to 50 lines

    'max-params': ['error', 4],
    // Limits function parameters to 4

    'max-depth': ['error', 4],
    // Limits nesting depth to 4 levels

    'max-nested-callbacks': ['error', 3],
    // Limits nested callbacks to 3 levels

    'max-statements': ['error', 20],
    // Limits statements per function to 20

    'max-statements-per-line': ['error', 1],
    // Limits statements per line to 1

    'max-len': [
      'error',
      {
        code: 100, // Line length limit
        tabWidth: 2, // Tab width
        ignoreUrls: true, // Ignore URLs
        ignoreStrings: true, // Ignore long strings
        ignoreTemplateLiterals: true, // Ignore template literals
        ignoreRegExpLiterals: true, // Ignore regex literals
        ignoreComments: true // Ignore comments
      }
    ],

    // Code Maintainability
    'consistent-return': 'error',
    // Ensures consistent return statements

    'no-else-return': 'error',
    // Prevents else after return

    'no-return-assign': 'error',
    // Prevents assignment in return statement

    'no-return-await': 'error',
    // Prevents unnecessary return await

    'no-unmodified-loop-condition': 'error',
    // Prevents unmodified loop conditions

    'no-unreachable-loop': 'error',
    // Prevents unreachable loops

    'no-useless-return': 'error',
    // Prevents useless return statements

    'no-var': 'error',
    // Prevents var declarations

    'prefer-const': 'error',
    // Prefers const for non-reassigned variables

    'prefer-let': 'error',
    // Prefers let for reassigned variables

    // Performance Optimization
    'no-loop-func': 'error',
    // Prevents functions in loops

    'no-new-object': 'error',
    // Prevents Object constructor

    'no-new-wrappers': 'error',
    // Prevents wrapper object constructors

    'no-array-constructor': 'error',
    // Prevents Array constructor

    'no-new-array': 'error',
    // Prevents new Array() usage

    'prefer-spread': 'error',
    // Prefers spread operator over apply()

    'prefer-rest-params': 'error',
    // Prefers rest parameters over arguments

    'prefer-arrow-callback': 'error',
    // Prefers arrow functions for callbacks

    'prefer-template': 'error',
    // Prefers template literals over concatenation

    'prefer-destructuring': [
      'error',
      {
        array: true, // Prefer array destructuring
        object: true // Prefer object destructuring
      },
      {
        enforceForRenamedProperties: false // Don't enforce for renamed properties
      }
    ],

    // Best Practices
    'no-console': 'error',
    // Prevents console statements

    'no-debugger': 'error',
    // Prevents debugger statements

    'no-alert': 'error',
    // Prevents alert, confirm, prompt

    'no-eval': 'error',
    // Prevents eval() usage

    'no-implied-eval': 'error',
    // Prevents implied eval() usage

    'no-new-func': 'error',
    // Prevents Function constructor

    'no-script-url': 'error',
    // Prevents javascript: URLs

    'no-sequences': 'error',
    // Prevents comma operators

    'no-throw-literal': 'error',
    // Prevents throwing literals

    'no-unused-expressions': 'error',
    // Prevents unused expressions

    'no-useless-call': 'error',
    // Prevents useless call/apply

    'no-useless-concat': 'error',
    // Prevents useless concatenation

    'no-useless-constructor': 'error',
    // Prevents useless constructors

    'no-useless-rename': 'error',
    // Prevents useless renaming

    'no-void': 'error',
    // Prevents void operator

    'no-with': 'error',
    // Prevents with statements

    'prefer-promise-reject-errors': 'error',
    // Ensures Promise rejections are Error objects

    'require-await': 'off', // Use TypeScript version
    '@typescript-eslint/require-await': 'warn',

    // Code Style and Consistency
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2, // Maximum 2 empty lines
        maxEOF: 1, // Maximum 1 empty line at end of file
        maxBOF: 0 // No empty lines at beginning of file
      }
    ],

    'no-trailing-spaces': 'error',
    // Prevents trailing spaces

    'no-mixed-spaces-and-tabs': 'error',
    // Prevents mixed spaces and tabs

    indent: 'off', // Use Prettier for indentation

    quotes: 'off', // Use Prettier for quotes

    semi: 'off', // Use Prettier for semicolons

    'comma-dangle': 'off', // Use Prettier for comma dangles

    'object-curly-spacing': 'off', // Use Prettier for spacing

    'array-bracket-spacing': 'off', // Use Prettier for spacing

    'computed-property-spacing': 'off', // Use Prettier for spacing

    'space-before-blocks': 'off', // Use Prettier for spacing

    'space-before-function-paren': 'off', // Use Prettier for spacing

    'space-in-parens': 'off', // Use Prettier for spacing

    'space-infix-ops': 'off', // Use Prettier for spacing

    'space-unary-ops': 'off', // Use Prettier for spacing

    'keyword-spacing': 'off', // Use Prettier for spacing

    'brace-style': 'off', // Use Prettier for brace style

    camelcase: 'off', // Use TypeScript naming conventions

    'new-cap': 'off', // Use TypeScript naming conventions

    'new-parens': 'off', // Use Prettier for parentheses

    'no-array-constructor': 'error',
    // Prevents Array constructor

    'no-new-object': 'error',
    // Prevents Object constructor

    'no-new-wrappers': 'error',
    // Prevents wrapper object constructors

    'no-new-array': 'error',
    // Prevents new Array() usage

    'no-new-require': 'error',
    // Prevents new require() usage

    'no-new-symbol': 'error',
    // Prevents new Symbol() usage

    'no-new-wrappers': 'error',
    // Prevents wrapper object constructors

    'no-obj-calls': 'error',
    // Prevents calling non-callable objects

    'no-octal': 'error',
    // Prevents octal literals

    'no-octal-escape': 'error',
    // Prevents octal escape sequences

    'no-proto': 'error',
    // Prevents __proto__ usage

    'no-redeclare': 'error',
    // Prevents variable redeclaration

    'no-regex-spaces': 'error',
    // Prevents regex spaces

    'no-self-assign': 'error',
    // Prevents self assignment

    'no-self-compare': 'error',
    // Prevents self comparison

    'no-sequences': 'error',
    // Prevents comma operators

    'no-shadow': 'off', // Use TypeScript version
    '@typescript-eslint/no-shadow': 'error',

    'no-shadow-restricted-names': 'error',
    // Prevents shadowing restricted names

    'no-sparse-arrays': 'error',
    // Prevents sparse arrays

    'no-this-before-super': 'error',
    // Prevents this before super

    'no-throw-literal': 'error',
    // Prevents throwing literals

    'no-undef': 'off', // Use TypeScript version
    '@typescript-eslint/no-undef': 'error',

    'no-undef-init': 'error',
    // Prevents undefined initialization

    'no-unexpected-multiline': 'error',
    // Prevents unexpected multiline

    'no-unmodified-loop-condition': 'error',
    // Prevents unmodified loop conditions

    'no-unreachable': 'error',
    // Prevents unreachable code

    'no-unreachable-loop': 'error',
    // Prevents unreachable loops

    'no-unsafe-finally': 'error',
    // Prevents unsafe finally blocks

    'no-unsafe-negation': 'error',
    // Prevents unsafe negation

    'no-unsafe-optional-chaining': 'error',
    // Prevents unsafe optional chaining

    'no-unused-expressions': 'error',
    // Prevents unused expressions

    'no-unused-labels': 'error',
    // Prevents unused labels

    'no-unused-vars': 'off', // Use TypeScript version
    '@typescript-eslint/no-unused-vars': 'error',

    'no-use-before-define': 'off', // Use TypeScript version
    '@typescript-eslint/no-use-before-define': 'error',

    'no-useless-call': 'error',
    // Prevents useless call/apply

    'no-useless-catch': 'error',
    // Prevents useless catch blocks

    'no-useless-computed-key': 'error',
    // Prevents useless computed keys

    'no-useless-concat': 'error',
    // Prevents useless concatenation

    'no-useless-constructor': 'error',
    // Prevents useless constructors

    'no-useless-escape': 'error',
    // Prevents useless escapes

    'no-useless-rename': 'error',
    // Prevents useless renaming

    'no-useless-return': 'error',
    // Prevents useless returns

    'no-var': 'error',
    // Prevents var declarations

    'no-void': 'error',
    // Prevents void operator

    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', 'hack', 'xxx'],
        location: 'start'
      }
    ],

    'no-with': 'error',
    // Prevents with statements

    'prefer-const': 'error',
    // Prefers const for non-reassigned variables

    'prefer-let': 'error',
    // Prefers let for reassigned variables

    'prefer-promise-reject-errors': 'error',
    // Ensures Promise rejections are Error objects

    'prefer-rest-params': 'error',
    // Prefers rest parameters over arguments

    'prefer-spread': 'error',
    // Prefers spread operator over apply()

    'prefer-template': 'error',
    // Prefers template literals over concatenation

    'require-atomic-updates': 'error',
    // Prevents race conditions in async operations

    'require-await': 'off', // Use TypeScript version
    '@typescript-eslint/require-await': 'warn',

    'require-yield': 'error',
    // Requires yield in generator functions

    'use-isnan': 'error',
    // Requires isNaN() for NaN checks

    'valid-typeof': 'error',
    // Ensures valid typeof comparisons

    yoda: 'error'
    // Prevents yoda conditions
  }
};
