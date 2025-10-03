// ========================================
// ADVANCED NESTJS LINTING TEST FILE
// ========================================
// This file intentionally violates multiple linting rules to test the advanced configuration
// Uncomment the advanced config in .eslintrc.json to see all violations

import {
  Injectable,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Module
} from '@nestjs/common';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

// ========================================
// TYPESCRIPT VIOLATIONS
// ========================================

// Violation: Using 'any' type (should be specific type)
let anyVariable: any = 'This should be typed';

// Violation: Missing explicit return type
function missingReturnType(param: string) {
  return param.toUpperCase();
}

// Violation: Unused variable
const unusedVariable = 'This is never used';

// Violation: Missing readonly modifier
class ClassWithMutableProperties {
  public mutableProperty: string = 'Should be readonly';
}

// Violation: Floating promise (not awaited)
async function floatingPromise() {
  return Promise.resolve('This should be awaited');
}

// Violation: Awaiting non-thenable
async function awaitingNonThenable() {
  await 'This is not a promise';
}

// Violation: Misused promise
function misusedPromise() {
  if (Promise.resolve()) {
    return 'Promise in condition';
  }
}

// Violation: Missing await in async function
async function missingAwait() {
  return 'Should use await or remove async';
}

// Violation: Using || instead of ??
const nullishCoalescing = null || 'Should use ??';

// Violation: Not using optional chaining
const optionalChaining = { nested: { value: 'test' } };
const value = optionalChaining.nested && optionalChaining.nested.value;

// ========================================
// NESTJS VIOLATIONS
// ========================================

// Violation: Injectable class not provided in module
@Injectable()
export class UnprovidedService {
  getData() {
    return 'This service is not provided in any module';
  }
}

// Violation: Controller missing @ApiTags
@Controller('bad-controller')
export class BadController {
  @Get()
  getData() {
    return 'Missing @ApiTags decorator';
  }
}

// Violation: @ApiProperty optionality mismatch
export class BadDto {
  @ApiProperty({ required: false })
  requiredProperty: string; // Should be optional if @ApiProperty says required: false
}

// Violation: Non-primitive type with validation decorator
export class BadValidationDto {
  @ApiProperty()
  complexObject: { nested: string }; // Should use class-validator decorators
}

// Violation: Missing ValidationPipe
@Controller('no-validation')
export class NoValidationController {
  @Post()
  create(@Body() data: any) {
    return 'Should use ValidationPipe';
  }
}

// Violation: @Param name mismatch
@Controller('param-mismatch')
export class ParamMismatchController {
  @Get(':userId')
  getUser(@Param('id') id: string) {
    // Should be 'userId' not 'id'
    return { id };
  }
}

// ========================================
// SECURITY VIOLATIONS
// ========================================

// Violation: Object injection vulnerability
function objectInjection(userInput: string) {
  const obj = {};
  obj[userInput] = 'value'; // Potential object injection
  return obj;
}

// Violation: Non-literal regex
function nonLiteralRegex(pattern: string) {
  return new RegExp(pattern); // Should use literal regex
}

// Violation: Unsafe regex
function unsafeRegex() {
  return /(a+)+$/; // ReDoS vulnerability
}

// Violation: Buffer.allocUnsafe
function unsafeBuffer() {
  return Buffer.allocUnsafe(10); // Should use Buffer.alloc
}

// Violation: eval with expression
function evalWithExpression(code: string) {
  return eval(code); // Dangerous eval usage
}

// Violation: Non-literal filename
function nonLiteralFilename(filename: string) {
  return fs.readFileSync(filename); // Should validate filename
}

// ========================================
// IMPORT VIOLATIONS
// ========================================

// Violation: Wrong import order (should be: builtin, external, internal, parent, sibling, index)
import { SomeInternalService } from '../services/some-service';
import * as crypto from 'crypto';
import { ExternalLibrary } from 'external-library';

// Violation: Unresolved import
import { NonExistentModule } from './non-existent';

// Violation: Self import
import { SelfImport } from './advanced-buggy-test';

// Violation: Duplicate imports
import { Injectable } from '@nestjs/common';
import { Injectable as Injectable2 } from '@nestjs/common';

// Violation: Default export (should use named exports)
export default class DefaultExport {
  // Should not use default exports
}

// ========================================
// QUALITY VIOLATIONS
// ========================================

// Violation: High cognitive complexity
function tooComplexFunction(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
) {
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
                      if (b + c + d > 20) {
                        if (c + d + e > 20) {
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
    }
  }
  return 0;
}

// Violation: Duplicate string literals
function duplicateStrings() {
  const message1 = 'This is a duplicate string';
  const message2 = 'This is a duplicate string';
  const message3 = 'This is a duplicate string';
  return [message1, message2, message3];
}

// Violation: Identical functions
function identicalFunction1() {
  return 'same result';
}

function identicalFunction2() {
  return 'same result';
}

// Violation: Collapsible if statements
function collapsibleIf(a: boolean, b: boolean) {
  if (a) {
    if (b) {
      return 'both true';
    }
  }
}

// Violation: Redundant boolean
function redundantBoolean(value: boolean) {
  if (value === true) {
    return 'redundant';
  }
}

// Violation: Unused collection
function unusedCollection() {
  const arr = [1, 2, 3, 4, 5];
  return 'array not used';
}

// Violation: Not using immediate return
function notImmediateReturn(value: string) {
  if (value) {
    const result = value.toUpperCase();
    return result;
  }
  return null;
}

// ========================================
// PROMISE VIOLATIONS
// ========================================

// Violation: Promise without return
function promiseWithoutReturn() {
  return new Promise(resolve => {
    resolve('value');
    // Missing return statement
  });
}

// Violation: Promise without catch
function promiseWithoutCatch() {
  return Promise.reject('error');
  // Should have .catch() or .finally()
}

// Violation: Nested promises
function nestedPromises() {
  return Promise.resolve().then(() => {
    return Promise.resolve().then(() => {
      return 'nested';
    });
  });
}

// Violation: Promise in callback
function promiseInCallback(callback: Function) {
  callback(Promise.resolve('value'));
}

// Violation: Callback in promise
function callbackInPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('callback in promise');
    }, 100);
  });
}

// Violation: Using .then() instead of async/await
function usingThen() {
  return Promise.resolve('value').then(result => {
    return result.toUpperCase();
  });
}

// Violation: Using callbacks instead of async/await
function usingCallbacks(callback: Function) {
  setTimeout(() => {
    callback('result');
  }, 100);
}

// ========================================
// JSDOC VIOLATIONS
// ========================================

// Violation: Missing JSDoc
function missingJSDoc(param: string): string {
  return param.toUpperCase();
}

// Violation: Missing description
/**
 * @param {string} param
 */
function missingDescription(param: string): string {
  return param.toUpperCase();
}

// Violation: Missing param type
/**
 * @param param - Missing type
 */
function missingParamType(param: string): string {
  return param.toUpperCase();
}

// Violation: Missing returns
/**
 * @param {string} param
 */
function missingReturns(param: string): string {
  return param.toUpperCase();
}

// Violation: Missing returns type
/**
 * @param {string} param
 * @returns Missing type
 */
function missingReturnsType(param: string): string {
  return param.toUpperCase();
}

// ========================================
// NODE.JS VIOLATIONS
// ========================================

// Violation: Using callback-based fs instead of promises
function usingCallbackFs() {
  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    return data;
  });
}

// Violation: Using callback-based dns instead of promises
import * as dns from 'dns';
function usingCallbackDns() {
  dns.lookup('example.com', (err, address) => {
    if (err) throw err;
    return address;
  });
}

// Violation: Non-error first callback
function nonErrorFirstCallback(callback: Function) {
  callback('result', null); // Should be (error, result)
}

// ========================================
// GENERAL VIOLATIONS
// ========================================

// Violation: Using var instead of let/const
var oldStyleVariable = 'Should use let or const';

// Violation: Not using const for never-reassigned variable
let neverReassigned = 'Should be const';

// Violation: Console statements
console.log('Console not allowed');
console.error('Error console not allowed');
console.warn('Warning console not allowed');
console.info('Info console not allowed');
console.debug('Debug console not allowed');

// Violation: Debugger statement
debugger;

// Violation: Alert statements
alert('Alert not allowed');
confirm('Confirm not allowed');
prompt('Prompt not allowed');

// Violation: Long line (over 100 characters)
const veryLongLine =
  'This is an extremely long line that exceeds the maximum allowed length of 100 characters and should trigger an error';

// Violation: Too many lines in file (over 300 lines)
// This file intentionally exceeds 300 lines to test max-lines rule

// Violation: High complexity
function highComplexity(a: number, b: number, c: number) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (a + b > 10) {
          if (b + c > 10) {
            if (a + c > 10) {
              if (a + b + c > 20) {
                return a + b + c;
              }
            }
          }
        }
      }
    }
  }
  return 0;
}

// Violation: Inconsistent return
function inconsistentReturn(value: boolean) {
  if (value) {
    return 'string';
  }
  // Missing return for false case
}

// Violation: Async promise executor
function asyncPromiseExecutor() {
  return new Promise(async resolve => {
    resolve('async executor');
  });
}

// Violation: Rejecting with non-Error
function rejectWithNonError() {
  return Promise.reject('string error');
}

// Violation: Unnecessary await in return
async function unnecessaryAwait() {
  return await Promise.resolve('value');
}

// Violation: Magic numbers
function magicNumbers() {
  const result = 42 + 3.14 + 100;
  return result;
}

// Violation: Too many parameters
function tooManyParameters(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
) {
  return a + b + c + d + e;
}

// Violation: Too many lines in function
function tooManyLinesInFunction() {
  const line1 = 'This function has too many lines';
  const line2 = 'Line 2';
  const line3 = 'Line 3';
  const line4 = 'Line 4';
  const line5 = 'Line 5';
  const line6 = 'Line 6';
  const line7 = 'Line 7';
  const line8 = 'Line 8';
  const line9 = 'Line 9';
  const line10 = 'Line 10';
  const line11 = 'Line 11';
  const line12 = 'Line 12';
  const line13 = 'Line 13';
  const line14 = 'Line 14';
  const line15 = 'Line 15';
  const line16 = 'Line 16';
  const line17 = 'Line 17';
  const line18 = 'Line 18';
  const line19 = 'Line 19';
  const line20 = 'Line 20';
  const line21 = 'Line 21';
  const line22 = 'Line 22';
  const line23 = 'Line 23';
  const line24 = 'Line 24';
  const line25 = 'Line 25';
  const line26 = 'Line 26';
  const line27 = 'Line 27';
  const line28 = 'Line 28';
  const line29 = 'Line 29';
  const line30 = 'Line 30';
  const line31 = 'Line 31';
  const line32 = 'Line 32';
  const line33 = 'Line 33';
  const line34 = 'Line 34';
  const line35 = 'Line 35';
  const line36 = 'Line 36';
  const line37 = 'Line 37';
  const line38 = 'Line 38';
  const line39 = 'Line 39';
  const line40 = 'Line 40';
  const line41 = 'Line 41';
  const line42 = 'Line 42';
  const line43 = 'Line 43';
  const line44 = 'Line 44';
  const line45 = 'Line 45';
  const line46 = 'Line 46';
  const line47 = 'Line 47';
  const line48 = 'Line 48';
  const line49 = 'Line 49';
  const line50 = 'Line 50';
  const line51 = 'Line 51';
  return line1 + line2 + line3 + line4 + line5;
}

// ========================================
// FILE-SPECIFIC VIOLATIONS
// ========================================

// This file should trigger file-specific rules based on its content
// The modular config has specific rules for different file types

// ========================================
// ADDITIONAL VIOLATIONS TO REACH 300+ LINES
// ========================================

function additionalViolation1() {
  return 'Additional violation 1';
}

function additionalViolation2() {
  return 'Additional violation 2';
}

function additionalViolation3() {
  return 'Additional violation 3';
}

function additionalViolation4() {
  return 'Additional violation 4';
}

function additionalViolation5() {
  return 'Additional violation 5';
}

function additionalViolation6() {
  return 'Additional violation 6';
}

function additionalViolation7() {
  return 'Additional violation 7';
}

function additionalViolation8() {
  return 'Additional violation 8';
}

function additionalViolation9() {
  return 'Additional violation 9';
}

function additionalViolation10() {
  return 'Additional violation 10';
}

function additionalViolation11() {
  return 'Additional violation 11';
}

function additionalViolation12() {
  return 'Additional violation 12';
}

function additionalViolation13() {
  return 'Additional violation 13';
}

function additionalViolation14() {
  return 'Additional violation 14';
}

function additionalViolation15() {
  return 'Additional violation 15';
}

function additionalViolation16() {
  return 'Additional violation 16';
}

function additionalViolation17() {
  return 'Additional violation 17';
}

function additionalViolation18() {
  return 'Additional violation 18';
}

function additionalViolation19() {
  return 'Additional violation 19';
}

function additionalViolation20() {
  return 'Additional violation 20';
}

// ========================================
// FINAL VIOLATIONS TO ENSURE 300+ LINES
// ========================================

export class FinalViolations {
  method1() {
    return 'method1';
  }
  method2() {
    return 'method2';
  }
  method3() {
    return 'method3';
  }
  method4() {
    return 'method4';
  }
  method5() {
    return 'method5';
  }
  method6() {
    return 'method6';
  }
  method7() {
    return 'method7';
  }
  method8() {
    return 'method8';
  }
  method9() {
    return 'method9';
  }
  method10() {
    return 'method10';
  }
  method11() {
    return 'method11';
  }
  method12() {
    return 'method12';
  }
  method13() {
    return 'method13';
  }
  method14() {
    return 'method14';
  }
  method15() {
    return 'method15';
  }
  method16() {
    return 'method16';
  }
  method17() {
    return 'method17';
  }
  method18() {
    return 'method18';
  }
  method19() {
    return 'method19';
  }
  method20() {
    return 'method20';
  }
}
