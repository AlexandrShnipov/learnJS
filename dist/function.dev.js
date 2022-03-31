"use strict";

// Сделайте функцию, выводящую на экран ваше имя.
var pushAlert = function pushAlert() {
  //alert('Alex');
  console.log(function (name) {
    return 'Alex';
  });
};

pushAlert(); // Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

var getSumm = function getSumm() {
  var a = 1;

  for (i = 0; i <= 100; i++) {
    a += i;
  }

  console.log('a -->', a);
};

getSumm(); //Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

var getResult = function getResult(num) {
  num = Math.pow(num, 2);
  console.log('num -->', num);
};

getResult(3); //Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'

var getResult2 = function getResult2(num) {
  if (num < 0) {
    console.log('---');
  } else if (num > 0) {
    console.log('+++');
  } else {
    console.log('getResult2 = 0');
  }
};

getResult2(-1); //Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

var getSumm3 = function getSumm3(num1, num2, num3) {
  console.log('getSumm3 -->', num1 + num2 + num3);
};

getSumm3(3, 5, 6); //Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:

var getSumm4 = function getSumm4(num1, num2, num3) {
  console.log('getSumm4 -->', num1 + num2 + num3);
};

var param1 = 1;
var param2 = 2;
var param3 = 3;
getSumm4(param1, param2, param3); //Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

var getResult4 = function getResult4(num) {
  return num = Math.pow(num, 3);
};

var result4 = getResult4(3);
console.log('getResult4 -->', result4);

var getResult5 = function getResult5(num) {
  return num = Math.pow(num, 3);
};

var result5 = getResult5(3);
console.log('getResult5 -->', result5); //Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

var getResults6 = function getResults6(num) {
  return Math.sqrt(num);
};

var getResults6Finish = getResults6(3) + getResults6(4);
console.log('getResults6 -->', getResults6Finish); //Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
//С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

var sqrt = function sqrt(num) {
  return Math.sqrt(num);
};

var round = function round(num) {
  return num.toFixed(3);
};

var result = round(sqrt(2));
console.log('round(sqrt(2)) -->', result);
console.log('sqrt(2)-->', sqrt(2)); //Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
//С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

var sqrt2 = function sqrt2(num) {
  return Math.sqrt(num);
};

var sum = function sum(num1, num2, num3) {
  return num1 + num2 + num3;
};

var result6 = sum(sqrt2(2), sqrt2(3), sqrt2(4));
console.log('sum(sqrt2(2), sqrt2(3), sqrt2(4))-->', result6); //Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
//С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

var round2 = function round2(num) {
  return num.toFixed(3);
};

var result7 = round2(sum(sqrt2(2), sqrt2(3), sqrt2(4)));
console.log('toFixed(3)-->', result7); //Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

var getRsult7 = function getRsult7(num) {
  for (var _i = 1; num >= 10; _i++) {
    if ((num /= 2) < 10) return _i;
  } // let sum = num;
  // let i = 1;
  // let del = 2;
  // while (true) {
  //   sum /= del;
  //   if (sum < 10) {
  //     return i;
  //   }
  //   i++;
  // }

};

console.log('getRsult7-->', getRsult7(10)); //Дана следующая функция: Перепишите ее в сокращенной форме согласно изученной теории.
// function func(num1, num2) {
// 	let result;
// 		if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
// 		return result;
// }
// alert(func(3, 4));

var func = function func(num1, num2) {
  if (num1 > 0 && num2 > 0) return num1 * num2;else return num1 - num2;
};

console.log('3*4 -->', func(3, 4)); //Напишите функцию, которая будет находить сумму квадратов элементов массива.

var summArr3 = function summArr3(arr) {
  var summ3 = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;
      summ3 += Math.pow(elem, 2);
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

  return summ3;
};

var arr3 = [1, 2, 3, 4];
console.log('summArr3 -->', summArr3(arr3)); //Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

var getDigitsSum = function getDigitsSum(num) {
  var sum4 = 0;
  var arr4 = Array.from(String(num), Number);

  for (var _i2 = 0, _arr = arr4; _i2 < _arr.length; _i2++) {
    var elem = _arr[_i2];
    sum4 += elem;
  }

  return sum4;
};

var arr5 = 123;
console.log(getDigitsSum(arr5)); //Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число.

var getDivisors = function getDivisors(num) {
  var arr1 = [];

  for (var _i3 = 0; _i3 <= num; _i3++) {
    if (num % _i3 == 0) arr1.push(_i3);
  }

  return arr1;
};

var LetgetDivisors = 24;
console.log(getDivisors(LetgetDivisors)); //Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
// const reverseStr = string => {
//   const arr = string.split('');
//   const arrReverse = arr.reverse();
//   const resultArrReverse = arrReverse.join('');
//   return resultArrReverse;
// }

var reverseStr = function reverseStr(string) {
  return string.split('').reverse().join('');
};

var parametrReverseStr = 'sasha';
console.log(reverseStr(parametrReverseStr)); //Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
//! удаляет только одно значение
// const delElem = (elemArr, arr) => {
//   i = arr.indexOf(elemArr);
//   if(i >= 0) {
//     arr.splice(i, 1);
//   }
//   return arr;
// }
// console.log(delElem(-4, [3, 5, -4, 6]));

var delElem = function delElem(elemArr, arr) {
  arr = arr.filter(function (n) {
    return n != elemArr;
  });
  return arr;
};

console.log(delElem(4, [3, 5, 4, 6, 4])); //Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции
// const getArr = (num4) => {
//   let arr = [];
//   for (let i = 0; i <= num4; i++){
//     arr.push(i);
//   }
//   return arr;
// }
// let numberForGetArr = 8;
// console.log(getArr(numberForGetArr));

var text = document.querySelector('[data-text]');

var getArr = function getArr(num4) {
  var arr = [];

  for (var _i4 = 0; _i4 <= num4; _i4++) {
    arr.push(_i4);
  }

  return arr;
};

var numberForGetArr = 8;
console.log(getArr(numberForGetArr));
text.innerHTML = getArr(numberForGetArr); //Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. 

var getArr2 = function getArr2(numStart, numFinish) {
  var arr2 = [];

  for (var _i5 = numStart; _i5 <= numFinish; _i5++) {
    arr2.push(_i5);
  }

  return arr2;
};

var numStart = 3;
var numFinish = 10;
console.log(getArr2(numStart, numFinish)); // флаги в функции

var getFlag = function getFlag(num) {
  for (var _i6 = 2; _i6 < num; _i6++) {
    if (num % _i6 === 0) {
      return false;
    }
  }

  return true;
};

console.log(getFlag(8)); //Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
// const arrNumbers = arr => {
//   for (let elem of arr) {
//     if (elem %2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arrNumbers([6, 4, 6, 8]));

var arrNumbers = function arrNumbers(arr) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;
      if (elem % 2 !== 0) return false;
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

  return true;
};

console.log(arrNumbers([1, 4, 6, 8])); //Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными
// const arrNumbers2 = num => {
//   let getArr4 = Array.from(String(num), Number);
//   for (let elem of getArr4){
//     if(elem %2 === 0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arrNumbers2(778));

var arrNumbers2 = function arrNumbers2(num) {
  var getArr4 = Array.from(String(num), Number);

  for (var _i7 = 0, _getArr = getArr4; _i7 < _getArr.length; _i7++) {
    var elem = _getArr[_i7];
    if (elem % 2 === 0) return false;
  }

  return true;
};

console.log(arrNumbers2(778)); //Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд

var getArr4 = function getArr4(arr6) {
  for (var _i8 = 0; _i8 < arr6.length; _i8++) {
    if (arr6[_i8] == arr6[_i8 + 1]) {
      return true + ' ' + 'arr[i] повторяется';
    }
  }

  return false + ' ' + 'arr[i] не повторяется';
  ;
};

console.log(getArr4([1, 5, 9, 6, 8]));