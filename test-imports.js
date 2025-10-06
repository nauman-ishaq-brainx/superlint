// Test file for IMPORT rules from imports.js module

// Should trigger: import/order - wrong order (builtin should come first)
const path = require('path');
const fs = require('fs');

// Should trigger: no-duplicate-imports
const util1 = require('util');
const util2 = require('util');

