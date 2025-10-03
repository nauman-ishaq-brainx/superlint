# NestJS Linting Configuration

A comprehensive, modular ESLint configuration for NestJS applications that enforces code quality, security, and best practices.

## 📁 Configuration Structure

This configuration is organized into modular files for better maintainability:

```
nestjs-linting-config/
├── index.js              # Main configuration (extends all others)
├── base.js               # Core ESLint setup and plugins
├── nestjs.js             # NestJS-specific rules
├── typescript.js         # TypeScript rules
├── security.js           # Security-focused rules
├── imports.js            # Import/export rules
├── quality.js            # Code quality rules
├── file-specific.js      # File-specific rules
└── README.md             # This documentation
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install --save-dev \
  typescript \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  @darraghor/eslint-plugin-nestjs-typed \
  eslint-plugin-import \
  eslint-plugin-security \
  eslint-plugin-sonarjs \
  eslint-plugin-jsdoc \
  eslint-plugin-promise \
  eslint-plugin-node \
  eslint-plugin-prettier \
  eslint-config-prettier
```

### 2. Create TypeScript Configuration

```bash
# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test"]
}
EOF
```

### 3. Configure ESLint

```bash
# Create .eslintrc.json
cat > .eslintrc.json << 'EOF'
{
  "extends": ["./nestjs-linting-config/index.js"]
}
EOF
```

### 4. Configure Prettier

```bash
# Create .prettierrc
cat > .prettierrc << 'EOF'
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80,
  "endOfLine": "lf",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "bracketSameLine": false
}
EOF
```

### 5. Configure Pre-Commit Hooks

```bash
# Install Husky and lint-staged
npm install --save-dev husky lint-staged

# Initialize Husky
npx husky init

# Create pre-commit hook
echo 'npx lint-staged' > .husky/pre-commit

# Configure lint-staged in package.json
npm pkg set scripts.prepare="husky"
npm pkg set lint-staged='{"*.ts": ["eslint --fix", "prettier --write"], "*.js": ["eslint --fix", "prettier --write"]}'
```

## 📋 Configuration Files Explained

### `base.js` - Core Setup
- **Purpose**: Fundamental ESLint configuration
- **Contains**: Environment settings, parser configuration, core plugins
- **Extends**: ESLint recommended rules, TypeScript rules, security rules

### `nestjs.js` - NestJS-Specific Rules
- **Purpose**: Framework-specific linting rules
- **Contains**: Dependency injection validation, API documentation requirements
- **Rules**: Injectable providers, controller tags, validation pipes

### `typescript.js` - TypeScript Rules
- **Purpose**: Type safety and TypeScript best practices
- **Contains**: Type checking, naming conventions, modern TypeScript features
- **Rules**: No any types, explicit return types, proper type usage

### `security.js` - Security Rules
- **Purpose**: Security vulnerability prevention
- **Contains**: Input validation, secure coding practices, vulnerability detection
- **Rules**: No eval, secure regex, object injection prevention

### `imports.js` - Import/Export Rules
- **Purpose**: Dependency management and import organization
- **Contains**: Import ordering, circular dependency prevention, import validation
- **Rules**: Organized imports, no circular dependencies, proper import syntax

### `quality.js` - Code Quality Rules
- **Purpose**: Code maintainability and performance
- **Contains**: Complexity management, best practices, code style
- **Rules**: Complexity limits, performance optimization, consistent code style

### `file-specific.js` - File-Specific Rules
- **Purpose**: Rules that apply to specific file types
- **Contains**: Controller, service, module, DTO, entity, test file rules
- **Rules**: Different complexity limits, documentation requirements per file type

## 🎯 Key Features

### 🔒 Security
- Prevents common security vulnerabilities
- Enforces secure coding practices
- Validates input handling
- Prevents dangerous code patterns

### 🏗️ Architecture
- Enforces NestJS best practices
- Validates dependency injection
- Ensures proper module structure
- Enforces API documentation

### 📝 Type Safety
- Strict TypeScript rules
- No any types allowed
- Explicit return types
- Proper type usage

### 📊 Code Quality
- Complexity management
- Performance optimization
- Consistent code style
- Maintainable code structure

### 🔄 Import Management
- Organized import structure
- Circular dependency prevention
- Proper import validation
- Consistent import syntax

## 📏 File-Specific Rules

### Controllers (`*.controller.ts`)
- Max 200 lines
- Max 3 parameters per method
- Required JSDoc documentation
- Max complexity: 10

### Services (`*.service.ts`)
- Max 300 lines
- Max 30 lines per function
- Required JSDoc documentation
- Max complexity: 15

### Modules (`*.module.ts`)
- Max 100 lines
- Max 2 parameters per method
- No documentation required
- Max complexity: 5

### DTOs (`*.dto.ts`)
- Max 50 lines
- Max 1 parameter per method
- No documentation required
- Max complexity: 3

### Entities (`*.entity.ts`)
- Max 100 lines
- Max 1 parameter per method
- No documentation required
- Max complexity: 3

### Tests (`*.test.ts`, `*.spec.ts`)
- Max 200 lines
- Max 3 parameters per method
- No documentation required
- Max complexity: 20

## 🚨 Common Rules

### Global Limits
- **File length**: 300 lines
- **Function length**: 50 lines
- **Parameters**: 4 per function
- **Nesting depth**: 4 levels
- **Line length**: 100 characters
- **Complexity**: 15

### Security Rules
- No `eval()` usage
- No `console` statements
- No `debugger` statements
- No `alert`, `confirm`, `prompt`
- No `Function` constructor
- No `javascript:` URLs

### TypeScript Rules
- No `any` types
- Explicit return types
- Proper type usage
- Consistent naming conventions
- Modern TypeScript features

### Import Rules
- Organized import structure
- No circular dependencies
- No duplicate imports
- No default exports
- Consistent import syntax

## 🔧 Customization

### Override Rules
You can override any rule in your `.eslintrc.json`:

```json
{
  "extends": ["./nestjs-linting-config/index.js"],
  "rules": {
    "max-lines": ["error", { "max": 500 }],
    "no-console": "warn"
  }
}
```

### Disable Rules for Specific Files
Use overrides to disable rules for specific files:

```json
{
  "extends": ["./nestjs-linting-config/index.js"],
  "overrides": [
    {
      "files": ["**/*.test.ts"],
      "rules": {
        "no-console": "off"
      }
    }
  ]
}
```

### Add Custom Rules
Extend the configuration with your own rules:

```json
{
  "extends": ["./nestjs-linting-config/index.js"],
  "rules": {
    "custom-rule": "error"
  }
}
```

## 📚 Usage Examples

### Basic Usage
```bash
# Lint all files
npx eslint .

# Lint specific file
npx eslint src/app.controller.ts

# Auto-fix issues
npx eslint . --fix

# Lint with no warnings
npx eslint . --max-warnings=0
```

### Pre-Commit Hook
The configuration works with pre-commit hooks to automatically lint staged files:

```bash
# Stage files
git add src/app.controller.ts

# Commit (linting runs automatically)
git commit -m "Add controller"

# If errors found, commit is blocked
```

### CI/CD Integration
Use with GitHub SuperLinter for continuous integration:

```yaml
name: Lint Code Base
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
jobs:
  run-lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Lint Code Base
        uses: github/super-linter@v4
        env:
          VALIDATE_TYPESCRIPT_ES: true
          TYPESCRIPT_ES_CONFIG_FILE: .eslintrc.json
```

## 🐛 Troubleshooting

### Common Issues

1. **Parser errors**: Ensure TypeScript is installed and `tsconfig.json` exists
2. **Plugin not found**: Install all required dependencies
3. **Rule conflicts**: Check for conflicting rules in your configuration
4. **Performance issues**: Use `--cache` flag for better performance

### Debug Mode
Enable debug mode to see what's happening:

```bash
DEBUG=eslint:* npx eslint .
```

### Rule Documentation
Check rule documentation for specific issues:

```bash
npx eslint --print-config src/app.controller.ts
```

## 📈 Benefits

### For Developers
- **Consistent code style** across the team
- **Early error detection** before runtime
- **Better code quality** through enforced best practices
- **Faster code reviews** with automated checks

### For Teams
- **Reduced bugs** in production
- **Easier onboarding** for new developers
- **Maintainable codebase** with clear standards
- **Professional code quality** that scales

### For Projects
- **Better performance** through optimized code
- **Enhanced security** through vulnerability prevention
- **Improved maintainability** through consistent patterns
- **Higher reliability** through quality enforcement

## 🤝 Contributing

To contribute to this configuration:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with various NestJS projects
5. Submit a pull request

## 📄 License

This configuration is provided as-is for educational and commercial use.

## 🆘 Support

For issues or questions:

1. Check the troubleshooting section
2. Review the rule documentation
3. Create an issue in the repository
4. Contact the maintainers

---

**Happy Linting! 🎉**
