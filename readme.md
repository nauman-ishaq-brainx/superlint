# Superlint - Code Quality Demo Repository

A demonstration repository showcasing modern JavaScript linting with ESLint, Prettier, and automated pre-commit hooks using Husky.

## 🎯 Project Overview

This project demonstrates best practices for maintaining code quality in JavaScript projects by:
- Enforcing 20+ strict ESLint rules
- Automatic code formatting with Prettier
- Pre-commit hooks that block commits with errors
- GitHub Super Linter CI/CD integration
- Comprehensive test file with intentional violations

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [What's Included](#-whats-included)
- [Pre-Commit Hook](#-pre-commit-hook)
- [Usage Guide](#-usage-guide)
- [Linting Rules](#-linting-rules-enforced)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Bypass Commands](#-bypass-commands)
- [Troubleshooting](#-troubleshooting)

## 🚀 Quick Start

### Clone and Setup
```bash
# Clone the repository
git clone https://github.com/nauman-ishaq-brainx/superlint.git
cd superlint

# Install dependencies (pre-commit hooks auto-install)
npm install
```

That's it! The pre-commit hooks are now active and will run automatically.

## 📦 What's Included

### 1. **Linting Configuration**
- `.eslintrc.json` - ESLint rules configuration
- `.prettierrc` - Prettier formatting rules

### 2. **Pre-Commit Hook**
- **Husky v9.1.7** - Git hooks manager
- **lint-staged v16.2.3** - Runs linters on staged files only
- Automatically blocks commits with linting errors

### 3. **Test File**
- `buggy-test-file.js` - Contains 50+ intentional violations
- Tests all ESLint and Prettier rules
- Use this to verify linting is working

### 4. **CI/CD**
- `.github/workflows/super-linter.yml` - GitHub Actions workflow
- Runs Super Linter on pull requests

## 🔒 Pre-Commit Hook

### How It Works

1. **Stage files:** You run `git add file.js`
2. **Attempt commit:** You run `git commit -m "message"`
3. **Hook triggers:** Husky runs the pre-commit hook
4. **Linting:** lint-staged runs ESLint on staged `.js` files
5. **Decision:**
   - ✅ **No errors:** Commit proceeds
   - ❌ **Has errors:** Commit blocked, errors displayed

### Benefits

- ⚡ **Fast** - Only checks staged files, not entire codebase
- 🎯 **Targeted** - Catches issues before they reach the repo
- 🎨 **Colored Output** - Easy-to-read error messages
- 🤝 **Team-Wide** - Automatically works for all team members
- 🔧 **Auto-Fix** - Many issues fixed automatically

## 💻 Usage Guide

### Normal Development Workflow

```bash
# 1. Make changes to JavaScript files
echo "const x = 1;" > example.js

# 2. Stage your changes
git add example.js

# 3. Commit (hook runs automatically)
git commit -m "Add example file"

# If there are errors, they'll be displayed and commit will be blocked
# Fix the errors and try committing again
```

### Manual Linting

```bash
# Lint all JavaScript files
ESLINT_USE_FLAT_CONFIG=false npx eslint .

# Lint specific file
ESLINT_USE_FLAT_CONFIG=false npx eslint buggy-test-file.js

# Auto-fix fixable issues
ESLINT_USE_FLAT_CONFIG=false npx eslint . --fix

# Lint with no warnings allowed
ESLINT_USE_FLAT_CONFIG=false npx eslint . --max-warnings=0
```

### Format with Prettier

```bash
# Check formatting
npx prettier --check .

# Fix formatting
npx prettier --write .

# Format specific file
npx prettier --write buggy-test-file.js
```

## 📏 Linting Rules Enforced

### Variable Declarations
- ❌ **no-var** - Must use `let` or `const`, not `var`
- ✅ **prefer-const** - Use `const` for variables never reassigned
- ⚠️ **no-unused-vars** - Warn about declared but unused variables
- ❌ **no-undef** - No undeclared variables
- ❌ **no-redeclare** - No variable redeclaration

### Functions
- ❌ **func-names** - Function expressions must be named
- ✅ **prefer-arrow-callback** - Use arrow functions for callbacks

### Debugging & Development
- ❌ **no-console** - No `console.log()` in production
- ❌ **no-debugger** - No `debugger` statements
- ❌ **no-alert** - No `alert()`, `confirm()`, or `prompt()`

### Code Quality
- 📏 **max-len** - Max line length: **100 characters**
- 📄 **max-lines** - Max file lines: **300**
- 🔄 **complexity** - Max cyclomatic complexity: **15**

### Imports
- ❌ **no-duplicate-imports** - No duplicate import statements

### Code Flow
- ❌ **no-unreachable** - No code after `return`/`throw`
- ❌ **no-constant-condition** - No `if (true)` or constant conditions

### Security
- ❌ **no-eval** - No `eval()` usage
- ❌ **no-implied-eval** - No strings in `setTimeout`/`setInterval`
- ❌ **no-new-func** - No `Function` constructor
- ❌ **no-script-url** - No `javascript:` URLs

### Prettier Formatting
- ✅ Single quotes (`'`)
- ✅ Semicolons required
- ✅ 2-space indentation
- ✅ No trailing commas
- ✅ 80 character print width
- ✅ LF line endings
- ✅ Avoid arrow function parens when possible

## ⚙️ Configuration

### `package.json`

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.js": [
      "eslint --max-warnings=0"
    ]
  },
  "devDependencies": {
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.3"
  }
}
```

### `.husky/pre-commit`

```bash
export ESLINT_USE_FLAT_CONFIG=false
export NODE_NO_WARNINGS=1
npx lint-staged
```

### `.eslintrc.json`

See the full configuration in the `.eslintrc.json` file. Key features:
- Environment: Browser, ES6, Node.js
- Extends: `eslint:recommended`, `plugin:prettier/recommended`
- Parser: ECMAScript 2020
- 20+ custom rules configured

### `.prettierrc`

```json
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
```

## 🧪 Testing

### Test the Pre-Commit Hook

```bash
# Stage the buggy test file
git add buggy-test-file.js

# Try to commit (will be blocked)
git commit -m "Test pre-commit hook"

# Expected result: 50+ errors displayed, commit blocked
```

### Verify Linting Works

```bash
# Run linter on buggy file
ESLINT_USE_FLAT_CONFIG=false npx eslint buggy-test-file.js

# Should display 50 problems (32 errors, 18 warnings)
```

## 🚨 Bypass Commands

### When to Bypass (Use with Caution!)

Only bypass the pre-commit hook in emergencies:
- Critical hotfix needed immediately
- Linting rules conflict with legacy code
- Temporary work-in-progress commit

### Bypass Pre-Commit Hook

```bash
# Full flag
git commit --no-verify -m "Emergency fix"

# Short flag
git commit -n -m "Emergency fix"
```

⚠️ **Warning:** Bypassed commits will still fail in CI/CD if errors exist!

## 🔧 Troubleshooting

### Pre-Commit Hook Not Running

```bash
# Reinstall Husky hooks
npm run prepare

# Or manually
npx husky install
```

### Linting Errors After Installing

```bash
# Check if dependencies are installed
npm install

# Verify ESLint works
ESLINT_USE_FLAT_CONFIG=false npx eslint --version

# Check Husky installation
ls -la .husky/pre-commit
```

### Hook Running But Not Blocking Commits

Check that `.husky/pre-commit` has correct permissions:
```bash
chmod +x .husky/pre-commit
```

### ESLintRC Deprecation Warning

This is suppressed in the pre-commit hook with `NODE_NO_WARNINGS=1`. If you see it elsewhere, it's informational only and won't affect functionality.

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [GitHub Super Linter](https://github.com/github/super-linter)

## 🤝 Contributing

When contributing to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all linting passes
5. Commit your changes (pre-commit hook will run)
6. Push to your fork
7. Create a pull request

## 📄 License

ISC

## 👥 Author

Repository: [https://github.com/nauman-ishaq-brainx/superlint](https://github.com/nauman-ishaq-brainx/superlint)

---

**Status:** ✅ Fully functional and production-ready

**Last Updated:** October 2, 2025
