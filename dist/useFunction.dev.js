"use strict";

//!Давайте запишем в новый массив только те элементы, сумма первых двух цифр в которых равна сумме вторых двух цифр.
var result = [];
var arr = [1524, 1321, 4563, 7144, 2879];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var elem = _arr[_i];

  if (checkDigitsPairsSum(elem)) {
    result.push(elem);
  }
}

console.log(result);

function checkDigitsPairsSum(num) {
  var str = String(num);
  var sum1 = Number(str[0]) + Number(str[1]);
  var sum2 = Number(str[2]) + Number(str[3]);
  return sum1 == sum2;
} //!Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
//С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.


function getDigitsSum(num) {
  var sum = 0;
  var digits = String(num).split('');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = digits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;
      sum += Number(digit);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}

var arrYears = function arrYears(yearStart, yearFinish) {
  var arrSummNumbersYears = [];

  for (var i = yearStart; i <= yearFinish; i++) {
    if (getDigitsSum(i) === 13) {
      arrSummNumbersYears.push(i);
    }
  }

  return arrSummNumbersYears;
};

console.log(arrYears(1, 2030)); //!Дана функция, проверяющая числа на простоту. 
//С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
} //console.log(isPrime(4));


var primeNumbers = [];

for (var i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers); //!Пусть дан какой-то массив с числами, например, такой:
//[123, 456, 789]
//Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий: [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

var nums = [123, 456, 789];

var numReverse = function numReverse(number) {
  return Number(String(number).split('').reverse().join(''));
}; //console.log(numReverse(123));


var reverseArrayElements = function reverseArrayElements(arr) {
  var result1 = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;
      var resultNumReverse = numReverse(elem);
      result1.push(resultNumReverse);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result1;
};

console.log(reverseArrayElements(nums)); // выведет [321, 654, 987]
//!Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:
//В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

var num1 = 234;
var num2 = 531; // let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }
// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }
// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }

var getSumNumbers = function getSumNumbers(num) {
  var getSummArrNumbers = 0;
  var arrNumbers = String(num).split('');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arrNumbers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var arrNumber = _step3.value;
      getSummArrNumbers += Number(arrNumber);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return getSummArrNumbers;
}; //console.log(getSumNumbers(123));


var comparisonNumbers = function comparisonNumbers(numOne, numTwo) {
  return (// if (getSumNumbers(numOne) === getSumNumbers(numTwo)) {
    // 	console.log('сумма чисел равна')
    // } else {
    // 	console.log('сумма чисел не равна');
    // }
    getSumNumbers(numOne) === getSumNumbers(numTwo) ? console.log('сумма чисел равна') : console.log('сумма чисел не равна')
  );
};

comparisonNumbers(num1, num2); //!Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
//Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
//Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

var arr2 = [12, 24, 35, 14]; // for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

function getDivisors(num) {
  var result = [];

  for (var _i2 = 2; _i2 < num; _i2++) {
    if (num % _i2 == 0) {
      result.push(_i2);
    }
  }

  return result;
}

console.log(getDivisors(10));

var arrGetDivisors = function arrGetDivisors(arr) {
  var arrResult = [];
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = arr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var num = _step4.value;
      var divisors = getDivisors(num);
      if (divisors.length > 0) arrResult = arrResult.concat(divisors);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return arrResult;
};

console.log(arrGetDivisors(arr2));