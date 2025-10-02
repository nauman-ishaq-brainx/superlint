// BUGGY TEST FILE - Intentionally violates ALL ESLint and Prettier rules
// This file is designed to test the superlint configuration

// BUG 1: Using var instead of let/const (violates no-var rule)
var oldStyleVariable = "This should be let or const";

// BUG 2: Should use const (violates prefer-const rule)
let neverReassigned = "I'm never reassigned but declared as let";

// BUG 3: Unused variable (violates no-unused-vars rule)
const unusedVariable = "I'm declared but never used";

// BUG 4: Using undeclared variable (violates no-undef rule)
function useUndeclaredVar() { return undeclaredVariable; }

// BUG 5: Anonymous function expression (violates func-names rule)
const anonymousFunc = function() { return "I have no name"; };

// BUG 6: Not using arrow function for callback (violates prefer-arrow-callback rule)
setTimeout(function() { return "Should be arrow function"; }, 1000);

// BUG 7: Using console (violates no-console rule)
console.log("Console statements are not allowed in production");

// BUG 8: Using debugger (violates no-debugger rule)
debugger;

// BUG 9: Using alert (violates no-alert rule)
alert("Alert is not allowed");

// BUG 10: Line too long (violates max-len rule with 100 char limit)
const veryLongLine = "This is an extremely long line that exceeds the maximum allowed length of 100 characters as specified in the ESLint configuration and should trigger an error";

// BUG 11: Duplicate imports (violates no-duplicate-imports rule)
const fs = require('fs');
const path = require('path');
const fsAgain = require('fs');

// BUG 12: Unreachable code (violates no-unreachable rule)
function unreachableCode() {
  return "early return";
  const unreachable = "This code will never execute";
}

// BUG 13: Constant condition (violates no-constant-condition rule)
if (true) {
  const alwaysTrue = "This condition is always true";
}

// BUG 14: Using eval (violates no-eval rule)
eval("const dangerous = 'eval is dangerous';");

// BUG 15: Implied eval (violates no-implied-eval rule)
setTimeout("console.log('Implied eval')", 1000);

// BUG 16: Function constructor (violates no-new-func rule)
const funcConstructor = new Function('a', 'b', 'return a + b');

// BUG 17: JavaScript URL (violates no-script-url rule)
const link = "javascript:void(0)";

// BUG 18: Prettier violations - wrong quotes (should be single quotes)
const wrongQuotes = "Should use single quotes";

// BUG 19: Prettier violations - missing semicolon
const missingSemicolon = "Should end with semicolon"

// BUG 20: Prettier violations - wrong spacing
const wrongSpacing={key:"value",another:"value"};

// BUG 21: High cyclomatic complexity (violates complexity rule with limit 15)
function tooComplexFunction(a, b, c, d, e, f) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          if (e > 0) {
            if (f > 0) {
              if (a > b) {
                if (b > c) {
                  if (c > d) {
                    if (d > e) {
                      if (e > f) {
                        if (a + b > 10) {
                          if (c + d > 10) {
                            if (e + f > 10) {
                              if (a > 100) {
                                if (b > 100) {
                                  return "Too complex!";
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return "default";
}

// BUG 22: Prettier violations - trailing comma
const objWithTrailingComma = {
  first: 1,
  second: 2,
};

// BUG 23: Prettier violations - wrong indentation (4 spaces instead of 2)
function wrongIndentation() {
    const indented = "Should use 2 spaces";
    if (true) {
        return indented;
    }
}

// BUG 24: Multiple violations in one line
var x=1;alert(x);console.log(x);debugger;eval("x++");

// BUG 25: Prettier violation - arrow function parens (should avoid when possible)
const arrowWithParens = (x) => x + 1;

// BUG 26: Bracket on wrong line
const objectBracket = {
  prop: "value" };

// BUG 27: More console violations
console.error("Error message");
console.warn("Warning message");
console.info("Info message");
console.debug("Debug message");

// BUG 28: Using confirm (violates no-alert rule)
confirm("Are you sure?");

// BUG 29: Using prompt (violates no-alert rule)
prompt("Enter your name:");

// BUG 30: Variable redeclaration with var (less strict but still violates no-redeclare)
var duplicateVar = 1;
var duplicateVar = 2;

// Testing exports to make file have some usage
module.exports = {
  oldStyleVariable,
  neverReassigned,
  anonymousFunc,
  tooComplexFunction,
  x,
  duplicateVar
};
