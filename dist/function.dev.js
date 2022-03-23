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

console.log('3*4 -->', func(3, 4));