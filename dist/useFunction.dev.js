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
} //!Дана функция, проверяющая числа на простоту. 
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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;
      var resultNumReverse = numReverse(elem);
      result1.push(resultNumReverse);
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

  return result1;
};

console.log(reverseArrayElements(nums)); // выведет [321, 654, 987]