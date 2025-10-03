/**
 * Import/Export ESLint Configuration
 *
 * This file contains linting rules for import and export statements.
 * It focuses on:
 * - Import organization and ordering
 * - Import/export best practices
 * - Dependency management
 * - Circular dependency prevention
 *
 * These rules help maintain clean dependency management and prevent common import issues.
 */

module.exports = {
  // Import/Export specific linting rules
  rules: {
    // Import Organization and Ordering
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js built-in modules (fs, path, etc.)
          'external', // npm packages
          'internal', // Internal modules (relative to src/)
          'parent', // Parent directory imports (../)
          'sibling', // Same directory imports (./)
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

    // Import Resolution and Validation
    'import/no-unresolved': 'error',
    // Ensures all imports can be resolved

    'import/no-cycle': 'error',
    // Prevents circular dependencies

    'import/no-self-import': 'error',
    // Prevents importing from the same file

    'import/no-duplicates': 'error',
    // Prevents duplicate imports

    'import/no-default-export': 'error',
    // Prevents default exports (encourages named exports)

    'import/prefer-default-export': 'off',
    // Disabled in favor of named exports

    'import/no-named-default': 'error',
    // Prevents importing default export with named import syntax

    'import/no-named-export': 'off',
    // Allow named exports

    'import/no-anonymous-default-export': 'error',
    // Prevents anonymous default exports

    // Import/Export Best Practices
    'import/first': 'error',
    // Ensures imports are at the top of the file

    'import/newline-after-import': 'error',
    // Requires blank line after imports

    'import/no-absolute-path': 'error',
    // Prevents absolute path imports (use relative or alias)

    'import/no-dynamic-require': 'error',
    // Prevents dynamic require() calls

    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'src/**', // Allow internal source imports
          '@nestjs/**' // Allow NestJS internal imports
        ]
      }
    ],

    'import/no-relative-parent-imports': 'error',
    // Prevents imports from parent directories (use absolute imports)

    'import/no-useless-path-segments': 'error',
    // Prevents unnecessary path segments (././file)

    'import/no-webpack-loader-syntax': 'error',
    // Prevents webpack loader syntax in imports

    // Import/Export Restrictions
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/**/*.controller.ts',
            from: './src/**/*.service.ts',
            message:
              'Controllers should not import services directly. Use dependency injection.'
          },
          {
            target: './src/**/*.service.ts',
            from: './src/**/*.controller.ts',
            message:
              'Services should not import controllers. This creates circular dependencies.'
          },
          {
            target: './src/**/*.entity.ts',
            from: './src/**/*.controller.ts',
            message: 'Entities should not import controllers.'
          },
          {
            target: './src/**/*.entity.ts',
            from: './src/**/*.service.ts',
            message: 'Entities should not import services.'
          }
        ]
      }
    ],

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

    // Import/Export Naming Conventions
    'import/no-named-as-default': 'error',
    // Prevents importing named export as default

    'import/no-named-as-default-member': 'error',
    // Prevents importing named export as default member

    'import/no-namespace': 'error',
    // Prevents namespace imports (import * as)

    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true, // Check for unused exports
        missingExports: true, // Check for missing exports
        src: ['src/**/*.ts'], // Source files to check
        ignoreExports: [
          'src/main.ts', // Ignore main.ts exports
          'src/**/*.dto.ts', // Ignore DTO exports
          'src/**/*.entity.ts' // Ignore entity exports
        ]
      }
    ],

    // Import/Export Performance
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

    'import/no-import-module-exports': 'error',
    // Prevents import statements in CommonJS modules

    'import/no-commonjs': 'error',
    // Prevents CommonJS require() statements in ES modules

    'import/no-amd': 'error',
    // Prevents AMD define() statements

    'import/no-nodejs-modules': 'off', // Allow Node.js modules in Node.js projects

    // Import/Export Documentation
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

    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '^@/', // Ignore alias imports
          '^@nestjs/' // Ignore NestJS imports
        ]
      }
    ],

    // Import/Export TypeScript Specific
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    // Prefers inline type imports over separate type imports

    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true // Consider query strings in duplicate detection
      }
    ]
  }
};
