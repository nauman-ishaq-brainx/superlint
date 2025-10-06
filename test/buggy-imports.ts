/* eslint-disable */
/**
 * Buggy Imports Test File
 * This file intentionally violates import/export linting rules
 */

// ❌ Imports not at the top of file
const someCode = 'this should come after imports';

import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';

// ❌ No blank line after imports
@Injectable()
export class BadService {}

// ❌ Duplicate imports
import { Controller } from '@nestjs/common';
import { Controller as Ctrl } from '@nestjs/common';

// ❌ Imports not alphabetically sorted
import { zzz } from './zzz';
import { aaa } from './aaa';
import { mmm } from './mmm';

// ❌ Import groups not properly organized
import * as fs from 'fs'; // Node built-in
import { Service } from './service'; // Internal
import { Express } from 'express'; // External

// ❌ Unresolved import
import { NonExistent } from './this-does-not-exist';

// ❌ Circular dependency
import { CircularA } from './circular-a';

export class CircularB {
  constructor(private a: CircularA) {}
}

// ❌ Self import
import { CircularB as SelfImport } from './buggy-imports';

// ❌ Absolute path import
import { Something } from '/absolute/path/to/file';

// ❌ Useless path segments
import { User } from '../src/users/../entities/./user';

// ❌ Dynamic require
function loadModule(name: string) {
  return require(name);
}

// ❌ Unassigned import (not allowed except for certain file types)
import './side-effects';

// ❌ webpack loader syntax
import styles from '!style-loader!css-loader!./styles.css';

// ❌ Using default export (discouraged)
export default class DefaultExportClass {}

// ❌ Anonymous default export
export default function () {
  return 'anonymous';
}

// ❌ Named default import
import { default as DefaultImport } from './other-file';

// ❌ Namespace import when named imports would be better
import * as Everything from './utils';

// ❌ Multiple exports on same line
export const a = 1,
  b = 2,
  c = 3;

// ❌ Extraneous dependencies (dev dependency used in source)
import * as jest from 'jest';

// ❌ No file extension for imports
import { Helper } from './helper'; // Should be './helper.ts' or configured

// ❌ Import cycle
// File A imports B, B imports C, C imports A

// ❌ Type import not using type modifier
import { IUser } from './types';
// Should be: import type { IUser } from './types';

// ❌ Inconsistent import style
import React from 'react';
import * as ReactDOM from 'react-dom';
// Should be consistent

