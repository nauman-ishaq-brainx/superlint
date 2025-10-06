/* eslint-disable */
/**
 * Buggy Security Test File
 * This file intentionally violates security linting rules
 */

// ❌ Using eval()
const code = "console.log('hello')";
eval(code);

// ❌ Using Function constructor
const dynamicFunc = new Function('a', 'b', 'return a + b');

// ❌ Using setTimeout with string
setTimeout("alert('XSS')", 1000);

// ❌ Using setInterval with string
setInterval("console.log('unsafe')", 1000);

// ❌ javascript: URL
const link = document.createElement('a');
link.href = 'javascript:void(0)';

// ❌ Non-literal regexp
function createRegex(pattern: string) {
  return new RegExp(pattern); // Could be unsafe
}

// ❌ Unsafe regex (catastrophic backtracking)
const unsafeRegex = /^(a+)+$/;

// ❌ Object injection vulnerability
function getProperty(obj: any, key: string) {
  return obj[key]; // Unsafe property access
}

// ❌ Using Buffer (deprecated constructor)
const buf = new Buffer(10); // Should use Buffer.alloc()

// ❌ Using pseudoRandomBytes
import * as crypto from 'crypto';
const randomBytes = crypto.pseudoRandomBytes(16); // Insecure

// ❌ Child process execution with user input
import { exec } from 'child_process';

function runCommand(userInput: string) {
  exec(`ls ${userInput}`); // Command injection risk
}

// ❌ Non-literal fs filename
import * as fs from 'fs';

function readFile(filename: string) {
  return fs.readFileSync(filename); // Path traversal risk
}

// ❌ Detecting timing attacks
function compareSecrets(a: string, b: string) {
  return a === b; // Vulnerable to timing attacks
}

// ❌ SQL injection risk
function buildQuery(userId: string) {
  return `SELECT * FROM users WHERE id = ${userId}`; // SQL injection
}

// ❌ NoSQL injection risk
function findUser(username: string) {
  return { $where: `this.username == '${username}'` }; // NoSQL injection
}

// ❌ XSS vulnerability
function renderHTML(userInput: string) {
  document.body.innerHTML = userInput; // XSS risk
}

// ❌ Insecure cookie settings
function setCookie() {
  document.cookie = 'session=abc123'; // Missing secure flag
}

// ❌ Weak cryptographic algorithm
const md5Hash = crypto.createHash('md5'); // Weak algorithm

// ❌ Hardcoded credentials
const password = 'admin123'; // Hardcoded secret
const apiKey = 'sk_live_abc123def456'; // Hardcoded API key

// ❌ Insecure random number generation
function generateToken() {
  return Math.random().toString(36); // Not cryptographically secure
}

// ❌ Prototype pollution
function merge(target: any, source: any) {
  for (const key in source) {
    target[key] = source[key]; // Prototype pollution risk
  }
}

// ❌ Unrestricted file upload
function uploadFile(filename: string, content: Buffer) {
  fs.writeFileSync(`./uploads/${filename}`, content); // No validation
}

// ❌ Open redirect vulnerability
function redirect(url: string) {
  window.location.href = url; // Unvalidated redirect
}

// ❌ Missing input validation
function processInput(data: any) {
  return data.toString(); // No validation
}

// ❌ Insecure deserialization
function deserialize(input: string) {
  return JSON.parse(input); // Could execute malicious code in some contexts
}

