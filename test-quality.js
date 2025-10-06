// Test file for QUALITY rules from quality.js module

// Should trigger: sonarjs/cognitive-complexity (over 15)
function highComplexity(a, b, c) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (a + b > 10) {
          if (b + c > 10) {
            if (a + c > 10) {
              if (a + b + c > 20) {
                if (a + b > 15) {
                  if (b + c > 15) {
                    return a + b + c;
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

// Should trigger: sonarjs/no-identical-functions
function func1() {
  return 'same';
}
function func2() {
  return 'same';
}

// Should trigger: sonarjs/no-collapsible-if
function collapsible(x) {
  if (x > 0) {
    if (x < 10) {
      return true;
    }
  }
}

// Should trigger: max-lines-per-function (over 50 lines)
function tooLong() {
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
  return line51;
}

