/* eslint-disable */
/**
 * Buggy Code Quality Test File
 * This file intentionally violates code quality linting rules
 */

// ❌ Function with high cyclomatic complexity
function tooComplex(a, b, c, d, e) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          if (e) {
            if (a > 10) {
              if (b < 5) {
                if (c === 'test') {
                  if (d !== null) {
                    if (e.length > 0) {
                      if (a + b > 15) {
                        if (c.includes('x')) {
                          if (d.toString() === 'y') {
                            if (e[0] === 'z') {
                              return 'too complex';
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
  return 'default';
}

// ❌ Duplicate function implementations
function duplicateLogic(x: number): number {
  if (x > 0) {
    return x * 2;
  } else {
    return 0;
  }
}

function anotherDuplicate(y: number): number {
  if (y > 0) {
    return y * 2;
  } else {
    return 0;
  }
}

// ❌ Duplicate string literals
const message1 = 'This is a duplicate string';
const message2 = 'This is a duplicate string';
const message3 = 'This is a duplicate string';
const message4 = 'This is a duplicate string';

// ❌ Collapsible if statements
function collapsibleIfs(x: number) {
  if (x > 0) {
    if (x < 100) {
      return 'valid';
    }
  }
  return 'invalid';
}

// ❌ Redundant boolean expressions
function redundantBoolean(flag: boolean) {
  if (flag === true) {
    return true;
  } else {
    return false;
  }
}

// ❌ Unused collection
function unusedCollection() {
  const array = [1, 2, 3, 4, 5];
  // Array created but never used
  return 'done';
}

// ❌ Not preferring immediate return
function unnecessaryVariable(x: number) {
  const result = x * 2;
  return result;
}

// ❌ Identical expressions in binary operation
function identicalExpressions(a: number) {
  return a === a; // Always true
}

// ❌ Redundant jump statement
function redundantJump(x: number) {
  if (x > 0) {
    return 'positive';
  } else {
    return 'not positive';
    return 'unreachable'; // Redundant
  }
}

// ❌ Small switch (should use if-else)
function smallSwitch(type: string) {
  switch (type) {
    case 'a':
      return 'A';
    case 'b':
      return 'B';
    default:
      return 'other';
  }
}

// ❌ Using empty return value
function emptyReturn(): void {
  console.log('doing something');
}

const value = emptyReturn(); // Using void return value

// ❌ Not preferring single boolean return
function notSingleReturn(x: number): boolean {
  if (x > 0) {
    return true;
  } else {
    return false;
  }
}

// ❌ For loop that could be while
function preferWhile() {
  for (; true; ) {
    break;
  }
}

// ❌ Gratuitous expressions
function gratuitous(x: number) {
  return (x + 0) * 1; // Useless operations
}

// ❌ Inverted boolean check
function invertedCheck(x: number) {
  if (!(x > 0)) {
    // Should be: if (x <= 0)
    return 'not positive';
  }
}

// ❌ Nested switch statements
function nestedSwitch(a: string, b: string) {
  switch (a) {
    case 'x':
      switch (b) {
        case 'y':
          return 'xy';
      }
      break;
  }
}

// ❌ Nested template literals
const nested = `outer ${`inner ${`deep`}`}`;

// ❌ Redundant parentheses
const calc = ((5 + 3) * (2));

// ❌ Unthrown error
function unthrown() {
  const error = new Error('This error is never thrown');
  console.log(error);
}

// ❌ Useless catch
function uselessCatch() {
  try {
    throw new Error('test');
  } catch (e) {
    throw e; // Useless catch block
  }
}

// ❌ Not preferring object literal
const obj = new Object();
obj['key'] = 'value';

// ❌ Not using optional chaining (SonarJS version)
const nested2 = obj && obj['nested'] && obj['nested']['value'];

// ❌ Not preferring template literals
const concatenated = 'Hello' + ' ' + 'World' + '!';

// ❌ Line exceeding max length (100 characters)
const veryLongLine = 'This is an extremely long line that definitely exceeds the maximum allowed length of 100 characters';

// ❌ File with too many lines (this file should exceed 300 lines)
// ... adding more violations ...

// ❌ Function with too many lines
function tooManyLines() {
  const line1 = 1;
  const line2 = 2;
  const line3 = 3;
  const line4 = 4;
  const line5 = 5;
  const line6 = 6;
  const line7 = 7;
  const line8 = 8;
  const line9 = 9;
  const line10 = 10;
  const line11 = 11;
  const line12 = 12;
  const line13 = 13;
  const line14 = 14;
  const line15 = 15;
  const line16 = 16;
  const line17 = 17;
  const line18 = 18;
  const line19 = 19;
  const line20 = 20;
  const line21 = 21;
  const line22 = 22;
  const line23 = 23;
  const line24 = 24;
  const line25 = 25;
  const line26 = 26;
  const line27 = 27;
  const line28 = 28;
  const line29 = 29;
  const line30 = 30;
  const line31 = 31;
  const line32 = 32;
  const line33 = 33;
  const line34 = 34;
  const line35 = 35;
  const line36 = 36;
  const line37 = 37;
  const line38 = 38;
  const line39 = 39;
  const line40 = 40;
  const line41 = 41;
  const line42 = 42;
  const line43 = 43;
  const line44 = 44;
  const line45 = 45;
  const line46 = 46;
  const line47 = 47;
  const line48 = 48;
  const line49 = 49;
  const line50 = 50;
  const line51 = 51;
  const line52 = 52;
  return 'done';
}

// ❌ Function with too many statements
function tooManyStatements() {
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  const k = 11;
  const l = 12;
  const m = 13;
  const n = 14;
  const o = 15;
  const p = 16;
  const q = 17;
  const r = 18;
  const s = 19;
  const t = 20;
  const u = 21;
  return u;
}

// ❌ Deep nesting
function deepNesting() {
  if (true) {
    if (true) {
      if (true) {
        if (true) {
          if (true) {
            // Too deep
            return 'nested';
          }
        }
      }
    }
  }
}

// ❌ Nested callbacks
function nestedCallbacks() {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          console.log('callback hell');
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

// ❌ Multiple trailing spaces     

// ❌ Multiple empty lines



// ❌ TODO comments
// TODO: Fix this later
// FIXME: This is broken
// HACK: Temporary workaround
// XXX: Review this code

