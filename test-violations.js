// Advanced ESLint Test Cases

// ========================================
// 1. VARIABLE DECLARATIONS
// ========================================

// Error: Using var
var oldVar = 'should use let/const';

// Error: Should use const (never reassigned)
let neverReassigned = 'should be const';

// Warning: Unused variable
const unusedVariable = 'never used';

// ========================================
// 2. CONSOLE & DEBUGGING
// ========================================

// Error: Console statements
console.log('not allowed');
console.error('not allowed');
console.warn('not allowed');

// Error: Debugger
debugger;

// Error: Alert/Confirm/Prompt
alert('not allowed');

// ========================================
// 3. FUNCTIONS
// ========================================

// Error: Unnamed function
const unnamed = function () {
  return 'should have name';
};

// Error: Should use arrow function
setTimeout(function () {
  return 'should be arrow';
}, 100);

// ========================================
// 4. COMPLEXITY
// ========================================

// Error: Too complex (complexity > 15)
function tooComplex(a, b, c, d, e) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          if (e > 0) {
            if (a + b > 10) {
              if (b + c > 10) {
                if (c + d > 10) {
                  if (d + e > 10) {
                    if (a + b + c > 20) {
                      return a + b + c + d + e;
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
  return 0;
}

// ========================================
// 5. CODE QUALITY
// ========================================

// Error: Unreachable code
function unreachable() {
  return 'early';
  const never = 'executed';
}

// Error: Constant condition
if (true) {
  const always = 'executes';
}

// Error: Line too long
const longLine = 'This is an extremely long line that exceeds the maximum allowed length of 100 characters as specified in the ESLint configuration rules';

// ========================================
// 6. SECURITY ISSUES
// ========================================

// Error: Eval usage
eval('dangerous code');

// Error: Implied eval
setTimeout('dangerous', 100);

// Error: Function constructor
const funcConstructor = new Function('a', 'return a');

// Error: JavaScript URL
const jsUrl = 'javascript:void(0)';

// ========================================
// 7. VARIABLE SCOPE
// ========================================

// Error: Redeclared variable
var redeclared = 'first';
var redeclared = 'second';

// Error: Undeclared variable
function useUndeclared() {
  undeclaredVar = 'missing declaration';
}

// ========================================
// 8. DUPLICATE IMPORTS (if we had modules)
// ========================================

// Would trigger: no-duplicate-imports
// import { something } from 'module';
// import { other } from 'module';

// ========================================
// 9. PROMISE/ASYNC ISSUES
// ========================================

// Error: Async without await
async function noAwait() {
  return 'should use await or remove async';
}

// Error: Promise without return
function promiseNoReturn() {
  new Promise((resolve) => {
    resolve('missing return');
  });
}

// ========================================
// 10. CODING STANDARDS
// ========================================

// Error: Prefer const
let shouldBeConst = 'never changes';

// Error: No semicolon (Prettier will add)
const noSemi = 'test'

// Error: Wrong quotes (Prettier prefers single)
const wrongQuotes = "should be single quotes";

// Error: Bad spacing (Prettier will fix)
const badSpacing={key:"value",another:"value2"};

// ========================================
// 11. COMPLEXITY - MAX PARAMS
// ========================================

// Error: Too many parameters (> 4)
function tooManyParams(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

// ========================================
// 12. COMPLEXITY - MAX LINES
// ========================================

// This file itself might exceed max-lines (300)
// Add more lines to test...

function filler1() { return 'filler'; }
function filler2() { return 'filler'; }
function filler3() { return 'filler'; }
function filler4() { return 'filler'; }
function filler5() { return 'filler'; }
function filler6() { return 'filler'; }
function filler7() { return 'filler'; }
function filler8() { return 'filler'; }
function filler9() { return 'filler'; }
function filler10() { return 'filler'; }
function filler11() { return 'filler'; }
function filler12() { return 'filler'; }
function filler13() { return 'filler'; }
function filler14() { return 'filler'; }
function filler15() { return 'filler'; }
function filler16() { return 'filler'; }
function filler17() { return 'filler'; }
function filler18() { return 'filler'; }
function filler19() { return 'filler'; }
function filler20() { return 'filler'; }

// ========================================
// END OF TEST CASES
// ========================================
