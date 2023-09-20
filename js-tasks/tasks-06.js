// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return "Hello " + (name == owner ? "boss" : "guest");
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}

//========[ЗАВДАННЯ НА СЕРЕДУ]=============================================================

// 1. Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// 2. DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// 3. Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

const max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// 4. Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const min = Math.min(...arr);

  return toReturn === "index" ? arr.indexOf(min) : min;
}

// 5. A wolf in sheep's clothing https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  return queue.reverse()[0] === "wolf"
    ? "Pls go away and stop eating my sheep"
    : "Oi! Sheep number " +
        `${queue.indexOf("wolf")}` +
        "! You are about to be eaten by a wolf!";
}

// 6. Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  return x.map((value) => value * 2);
}

// 7. Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    }
  }

  return null;
}

// Додаткові задачки по JS, щоб формувати навички, якщо маєте час і бажання 🙂
// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  i *= 2;
  return i;
}

// Century From Year https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return year % 100 === 0 ? year / 100 : Math.trunc(year / 100) + 1;
}

// Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}

// Cockroach speed https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}

// Angle of triangle https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - (a + b);
}

// Twice as old https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Return n-th even number https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return (n - 1) * 2;
}

// What's the real floor https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n > 0 && n <= 13) {
    return n - 1;
  }
  if (n <= 0) {
    return n;
  }
  return n - 2;
}

// Clock https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return ((h * 60 + m) * 60 + s) * 1000;
}

// Is n divisible by x and y https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
