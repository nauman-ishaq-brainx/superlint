/**
 * Main NestJS ESLint Configuration
 *
 * This is the main configuration file that combines all the modular configurations.
 * It extends:
 * - Base configuration (core setup)
 * - NestJS-specific rules
 * - TypeScript rules
 * - Security rules
 * - Import/export rules
 * - Code quality rules
 * - File-specific rules
 *
 * This provides a comprehensive linting setup for NestJS applications.
 */

module.exports = {
  // Extend all modular configurations
  extends: [
    './base.js', // Core ESLint setup and plugins
    './nestjs.js', // NestJS-specific rules
    './typescript.js', // TypeScript rules
    './security.js', // Security rules
    './imports.js', // Import/export rules
    './quality.js', // Code quality rules
    './file-specific.js' // File-specific rules
  ],

  // Global rules that apply everywhere
  rules: {
    // Global overrides for specific rules
    'no-magic-numbers': 'off', // Temporarily disabled due to configuration issues

    // Global naming conventions
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

    // Global file organization rules
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // Internal modules
          'parent', // Parent directory imports
          'sibling', // Same directory imports
          'index' // Index file imports
        ],
        'newlines-between': 'always', // Require blank lines between import groups
        alphabetize: {
          order: 'asc', // Sort imports alphabetically
          caseInsensitive: true // Case-insensitive sorting
        },
        pathGroups: [
          {
            pattern: '@nestjs/**', // NestJS packages
            group: 'external',
            position: 'before' // Place before other external packages
          },
          {
            pattern: 'src/**', // Internal source files
            group: 'internal',
            position: 'before' // Place before other internal files
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],

    // Global complexity rules
    complexity: ['error', 15], // Global complexity limit
    'max-lines': ['error', 300], // Global file length limit
    'max-lines-per-function': ['error', 50], // Global function length limit
    'max-params': ['error', 4], // Global parameter limit
    'max-depth': ['error', 4], // Global nesting depth limit
    'max-nested-callbacks': ['error', 3], // Global callback nesting limit
    'max-statements': ['error', 20], // Global statement limit
    'max-statements-per-line': 'off', // Temporarily disabled due to configuration issues

    // Global line length rules
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

    // Global code quality rules
    'consistent-return': 'error', // Consistent return statements
    'no-else-return': 'error', // No else after return
    'no-return-assign': 'error', // No assignment in return
    'no-return-await': 'error', // No unnecessary return await
    'no-unmodified-loop-condition': 'error', // No unmodified loop conditions
    'no-unreachable-loop': 'error', // No unreachable loops
    'no-useless-return': 'error', // No useless return statements

    // Global variable rules
    'no-var': 'error', // No var declarations
    'prefer-const': 'error', // Prefer const for non-reassigned variables
    'no-redeclare': 'error', // No variable redeclaration
    'no-undef': 'off', // Use TypeScript version
    'no-unused-vars': 'off', // Use TypeScript version
    '@typescript-eslint/no-unused-vars': 'error',

    // Global function rules
    'prefer-arrow-callback': 'error', // Prefer arrow functions for callbacks
    'prefer-rest-params': 'error', // Prefer rest parameters over arguments
    'prefer-spread': 'error', // Prefer spread operator over apply()
    'prefer-template': 'error', // Prefer template literals over concatenation
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

    // Global error handling rules
    'no-throw-literal': 'error', // No throwing literals
    'prefer-promise-reject-errors': 'error', // Proper error objects
    'no-async-promise-executor': 'error', // No async promise executors
    'require-atomic-updates': 'error', // No race conditions

    // Global security rules
    'no-eval': 'error', // No eval() usage
    'no-implied-eval': 'error', // No implied eval() usage
    'no-new-func': 'error', // No Function constructor
    'no-script-url': 'error', // No javascript: URLs
    'no-alert': 'error', // No alert, confirm, prompt
    'no-console': 'error', // No console statements
    'no-debugger': 'error', // No debugger statements

    // Global TypeScript rules
    '@typescript-eslint/no-explicit-any': 'error', // No any types
    '@typescript-eslint/explicit-function-return-type': 'warn', // Explicit return types
    '@typescript-eslint/prefer-readonly': 'error', // Prefer readonly properties
    '@typescript-eslint/no-floating-promises': 'error', // Handle all promises
    '@typescript-eslint/await-thenable': 'error', // Await only thenables
    '@typescript-eslint/no-misused-promises': 'error', // Proper promise usage
    '@typescript-eslint/require-await': 'warn', // Warn about async without await
    '@typescript-eslint/prefer-nullish-coalescing': 'error', // Use ?? operator
    '@typescript-eslint/prefer-optional-chain': 'error', // Use ?. operator
    '@typescript-eslint/no-unnecessary-condition': 'error', // No unnecessary conditions
    '@typescript-eslint/no-unnecessary-type-arguments': 'error', // No unnecessary type arguments
    '@typescript-eslint/prefer-as-const': 'error', // Prefer 'as const'
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // No unnecessary type assertions
    '@typescript-eslint/no-var-requires': 'error', // No require() in TypeScript
    '@typescript-eslint/consistent-type-imports': 'error', // Consistent type imports
    '@typescript-eslint/prefer-function-type': 'error', // Prefer function types
    '@typescript-eslint/no-empty-interface': 'error', // No empty interfaces
    '@typescript-eslint/no-extraneous-class': 'error', // No extraneous classes
    '@typescript-eslint/no-inferrable-types': 'error', // No inferrable types
    '@typescript-eslint/strict-boolean-expressions': 'error', // Strict boolean expressions

    // Global import/export rules
    'import/no-unresolved': 'error', // No unresolved imports
    'import/no-cycle': 'error', // No circular dependencies
    'import/no-self-import': 'error', // No self imports
    'import/no-duplicates': 'error', // No duplicate imports
    'import/no-default-export': 'error', // No default exports
    'import/prefer-default-export': 'off', // Disabled in favor of named exports
    'import/no-named-default': 'error', // No named default imports
    'import/no-named-export': 'off', // Allow named exports
    'import/no-anonymous-default-export': 'error', // No anonymous default exports
    'import/first': 'error', // Imports at top of file
    'import/newline-after-import': 'error', // Blank line after imports
    'import/no-absolute-path': 'error', // No absolute path imports
    'import/no-dynamic-require': 'error', // No dynamic require() calls
    'import/no-useless-path-segments': 'error', // No useless path segments
    'import/no-webpack-loader-syntax': 'error', // No webpack loader syntax
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '**/*.css', // Allow CSS imports
          '**/*.scss', // Allow SCSS imports
          '**/*.sass', // Allow SASS imports
          '**/*.less', // Allow LESS imports
          '**/*.styl', // Allow Stylus imports
          '**/*.vue', // Allow Vue imports
          '**/*.svelte' // Allow Svelte imports
        ]
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts', // Allow dev dependencies in test files
          '**/*.spec.ts', // Allow dev dependencies in spec files
          '**/test/**', // Allow dev dependencies in test directories
          '**/tests/**', // Allow dev dependencies in tests directories
          '**/__tests__/**', // Allow dev dependencies in __tests__ directories
          '**/*.config.js', // Allow dev dependencies in config files
          '**/*.config.ts' // Allow dev dependencies in config files
        ],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'], // Prefer inline type imports

    // Global SonarJS rules
    'sonarjs/cognitive-complexity': ['error', 15], // Cognitive complexity limit
    'sonarjs/no-duplicate-string': 'off', // Temporarily disabled due to configuration issues
    'sonarjs/no-identical-functions': 'error', // No identical functions
    'sonarjs/no-collapsible-if': 'error', // No collapsible if statements
    'sonarjs/no-redundant-boolean': 'error', // No redundant boolean expressions
    'sonarjs/no-unused-collection': 'error', // No unused collections
    'sonarjs/prefer-immediate-return': 'error', // Prefer immediate return
    'sonarjs/no-identical-expressions': 'error', // No identical expressions
    'sonarjs/no-redundant-jump': 'error', // No redundant jump statements
    'sonarjs/no-small-switch': 'error', // No small switch statements
    'sonarjs/no-use-of-empty-return-value': 'error', // No use of empty return values
    'sonarjs/prefer-single-boolean-return': 'error', // Prefer single boolean return
    'sonarjs/prefer-while': 'error', // Prefer while loops
    'sonarjs/no-inverted-boolean-check': 'error', // No inverted boolean checks
    'sonarjs/no-nested-switch': 'error', // No nested switch statements
    'sonarjs/no-nested-template-literals': 'error', // No nested template literals

    // Global JSDoc rules
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true, // Require JSDoc for function declarations
          ClassDeclaration: true, // Require JSDoc for class declarations
          MethodDefinition: true // Require JSDoc for method definitions
        }
      }
    ],
    'jsdoc/require-description': 'warn', // Require descriptions
    'jsdoc/require-param': 'warn', // Require parameter documentation
    'jsdoc/require-returns': 'warn', // Require return documentation
    'jsdoc/require-param-type': 'error', // Require parameter types
    'jsdoc/require-returns-type': 'error', // Require return types

    // Global Promise rules
    'promise/always-return': 'error', // Always return from promises
    'promise/catch-or-return': 'error', // Catch or return promises
    'promise/no-nesting': 'warn', // No promise nesting
    'promise/no-promise-in-callback': 'warn', // No promises in callbacks
    'promise/no-callback-in-promise': 'warn', // No callbacks in promises
    'promise/prefer-await-to-then': 'warn', // Prefer await to then
    'promise/prefer-await-to-callbacks': 'warn', // Prefer await to callbacks

    // Global Node.js rules
    'node/no-unsupported-features/es-syntax': 'off', // Allow ES syntax in Node.js
    'node/no-missing-import': 'error', // No missing imports
    'node/no-unpublished-require': 'error', // No unpublished requires
    'node/no-extraneous-require': 'error', // No extraneous requires
    'node/prefer-promises/fs': 'error', // Prefer promise-based fs
    'node/prefer-promises/dns': 'error', // Prefer promise-based dns
    'node/no-callback-literal': 'error', // No callback literals

    // Global security rules
    'security/detect-object-injection': 'warn', // Detect object injection
    'security/detect-non-literal-regexp': 'error', // Detect non-literal regexp
    'security/detect-unsafe-regex': 'error', // Detect unsafe regex
    'security/detect-buffer-noassert': 'error', // Detect buffer noassert
    'security/detect-eval-with-expression': 'error', // Detect eval with expression
    'security/detect-no-csrf-before-method-override': 'error', // Detect CSRF issues
    'security/detect-possible-timing-attacks': 'warn', // Detect timing attacks
    'security/detect-non-literal-fs-filename': 'warn', // Detect non-literal fs filenames
    'security/detect-pseudoRandomBytes': 'error', // Detect pseudo-random bytes
    'security/detect-child-process': 'warn', // Detect child process
    'security/detect-disable-mustache-escape': 'error', // Detect disabled mustache escape
    'security/detect-new-buffer': 'error', // Detect new buffer

    // Global code style rules
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2, // Maximum 2 empty lines
        maxEOF: 1, // Maximum 1 empty line at end of file
        maxBOF: 0 // No empty lines at beginning of file
      }
    ],
    'no-trailing-spaces': 'error', // No trailing spaces
    'no-mixed-spaces-and-tabs': 'error', // No mixed spaces and tabs
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', 'hack', 'xxx'],
        location: 'start'
      }
    ]
  }
};
