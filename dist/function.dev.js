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

var getSumm3 = function getSumm3(num1, num2) {
  console.log('getSumm3 -->', num1 + num2);
};

getSumm3(3, 5); //Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:

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