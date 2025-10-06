// Test file for SECURITY rules from security.js module

// Should trigger: security/detect-object-injection
function testObjectInjection(userInput) {
  const obj = {};
  obj[userInput] = 'value';
  return obj;
}

// Should trigger: no-eval
eval('dangerous code');

// Should trigger: no-implied-eval
setTimeout('dangerous', 100);

// Should trigger: no-new-func
const fn = new Function('a', 'return a');

// Should trigger: no-script-url
const link = 'javascript:void(0)';

