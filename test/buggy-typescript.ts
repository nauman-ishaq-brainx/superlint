/**
 * Buggy TypeScript Test File
 * This file intentionally violates TypeScript-specific linting rules
 */

// ❌ Using 'any' type
let badVariable: any = 'test';
badVariable = 123;
badVariable = {};

// ❌ Missing explicit return type
function noReturnType(x: number) {
  return x * 2;
}

// ❌ Using var instead of let/const
var oldStyleVar = 'should use let or const';

// ❌ Unused variables
const unusedConst = 'never used';
let unusedLet = 42;

// ❌ Non-null assertion
const maybeString: string | null = null;
const definitelyString = maybeString!; // Unsafe non-null assertion

// ❌ Type assertion instead of type annotation
const value = { name: 'John' } as any;

// ❌ Inferrable types (redundant type annotation)
const inferrable: number = 5;
const alsoInferrable: string = 'hello';

// ❌ Empty interface
interface IEmptyInterface {}

// ❌ Interface not prefixed with 'I'
interface BadInterface {
  name: string;
}

// ❌ Class not in PascalCase
class badclass {
  constructor(public name: string) {}
}

// ❌ Enum not in PascalCase
enum badEnum {
  FIRST = 'first',
  SECOND = 'second'
}

// ❌ Enum members not in UPPER_CASE
enum Status {
  Active = 'active',
  Inactive = 'inactive'
}

// ❌ Function without return type and using implicit any
function badFunction(param) {
  console.log(param);
  return param;
}

// ❌ Arrow function with redundant braces
const arrowFunc = (x: number) => {
  return x * 2;
}; // Should be: (x: number) => x * 2

// ❌ Not using nullish coalescing
const result = maybeString || 'default'; // Should use ??

// ❌ Not using optional chaining
const obj: { nested?: { value?: string } } = {};
const nestedValue = obj.nested && obj.nested.value; // Should use ?.

// ❌ Unnecessary type assertion
const num: number = 5;
const str = num as unknown as string; // Dangerous type assertion

// ❌ Floating promises (not awaited)
async function floatingPromise() {
  Promise.resolve('not awaited'); // Should be awaited or handled
}

// ❌ async function without await
async function noAwait() {
  return 'no await used';
}

// ❌ Misused promises
if (Promise.resolve(true)) {
  // ❌ Promise in condition
  console.log('This is wrong');
}

// ❌ Unnecessary condition
const alwaysTrue = true;
if (alwaysTrue) {
  console.log('Always executed');
}

// ❌ require() in TypeScript
const fs = require('fs'); // Should use import

// ❌ Inconsistent type imports
import { SomeType } from './types';
import type { AnotherType } from './types';

// ❌ Using namespace instead of module
namespace BadNamespace {
  export const value = 42;
}

// ❌ Function with too many parameters
function tooManyParams(
  a: string,
  b: number,
  c: boolean,
  d: object,
  e: string,
  f: number
) {
  return { a, b, c, d, e, f };
}

// ❌ Unnecessary type arguments
const array = new Array<number>(1, 2, 3); // Type can be inferred

// ❌ prefer-readonly (property never reassigned)
class BadClass {
  public mutableProperty: string; // Should be readonly

  constructor() {
    this.mutableProperty = 'initial';
  }
}

// ❌ Extraneous class (only static members)
class UtilityClass {
  static helper() {
    return 'helper';
  }
}

// ❌ No default export
export default function defaultExport() {
  return 'default exports discouraged';
}

