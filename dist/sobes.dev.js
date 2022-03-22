"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//'use strict'
//! получение свойства объекта
var man = {
  name: "Alex",
  age: 24,
  sayHello: function sayHello() {
    //alert('Hello')
    console.log('Hello!');
  }
};
man.sayHello();
var result = man.name;
console.log(result); //! палиндром

var isPalindrom = function isPalindrom(string) {
  var arr = string.split(''); // метод разбивки строки на массив по символам

  var reverseArr = arr.reverse(); // метод переворота символов слова

  var resString = reverseArr.join(''); // метод сборки перевернутого слова

  var res = arr === resString;
  return res;
};

var finishRes = isPalindrom('dog');
console.log(finishRes); //es6

var palindromES6 = function palindromES6(str) {
  return str === str.split('').reverse().join('');
};

var funishES6 = palindromES6('bob');
console.log(funishES6); //! функция поиска самого короткого слова

var findShorts = function findShorts(string) {
  var wordsArr = string.split(' '); // метод разбивки предложения на массив по словам ("пробел!!!")

  var sortedWordsArr = wordsArr.sort(function (a, b) {
    return a.length - b.length; // сортировка массива по длине слова
  });
  return sortedWordsArr[0];
};

var minWord = findShorts('hi y a cat');
console.log(minWord); //es6

var findShortsES6 = function findShortsES6(string) {
  return string.split(' ').sort(function (a, b) {
    return a.length - b.length;
  })[0];
};

var minWordES6 = findShortsES6('am i cat');
console.log(minWordES6); //! counter
// const counterFunc = () => {
//   let counter = 0;
//   if (counter <= 5) {
//     console.log(counter);
//   }counter++;
// }
// setInterval((counterFunc), 1000);

var text = document.querySelector('[data-text]');

var printNumbers = function printNumbers(from, to) {
  var current = from;
  var timerId = setInterval(function () {
    console.log(current);
    text.innerHTML = current;

    if (current === to) {
      clearInterval(timerId);
    }

    current++;
  }, 100);
}; // использование:


printNumbers(1, 10); //! setInterval

var timer = setInterval(function () {
  console.log('abc');
}, 10000);
clearInterval(timer); //! функция создания инициалов

var toInitials = function toInitials(name) {
  var nameArr = name.split(' '); // разбиваем строку на массив по словам

  var firstLetttersArr = nameArr.map(function (el) {
    return el.slice(0, 1).toUpperCase() + '.';
  }); // перебор массива .map с отрезанием первой буквы .slice и переводом в верх регистр с доб. точки

  var initials = firstLetttersArr.join(''); // превращае массив в строку

  return initials;
};

var returnInitials = toInitials('alex shnipov');
console.log(returnInitials); //es6

var toInitialsES6 = function toInitialsES6(name) {
  return name.split(' ').map(function (el) {
    return "".concat(el.slice(0, 1).toUpperCase(), ".");
  }).join('');
};

var returnInitialsES6 = toInitialsES6('alex fedorovich');
console.log(returnInitialsES6); //! функция суммирования всех чисел числа

var sumDigits = function sumDigits(number) {
  var moduleNumber = Math.abs(number); // метод - берет число по модулю в результате оно всегда положительное

  var str = moduleNumber.toString(); // метод - переводит число в строку

  var arr = str.split(''); // метод - переводит число в массив из чисел

  var res = arr.reduce(function (sum, cur) {
    return Number(sum) + Number(cur);
  }, 0); //суммирует значение чисел

  return res;
};

var summ = sumDigits(255);
alert(summ); //es6

var sumDigitsES6 = function sumDigitsES6(number) {
  return Mach.abs(number).toString().split().reduce(function (sum, cur) {
    return +sum + +cur;
  }, 0);
};

var summES6 = sumDigits(24);
alert(summES6); //! чистая функция

var add = function add(a, b) {
  return a + b;
};

add(4, 4);
var summm = add(4, 4);
console.log(summm); //не чистая -- результат зависит от значения внешней переменной

var a = 5;

var summ2 = function summ2(y) {
  return a += y;
};

var result2 = summ2(4);
console.log(result2); //! функция поиска максимального и минимального значения

var minMax = function minMax(arr) {
  var res = [];
  var minValue = Math.min.apply(null, arr);
  var maxValue = Math.max.apply(null, arr);
  res = [minValue, maxValue];
  return res;
};

var minMaxResult = minMax([4, 9, 2, 1]);
console.log('minMaxResult-->', minMaxResult); //es6

var minMaxes6 = function minMaxes6(arr) {
  return [Math.min.apply(Math, _toConsumableArray(arr)), Math.max.apply(Math, _toConsumableArray(arr))];
};

var minMaxResultES6 = minMaxes6([4, 3, 5, 8]);
console.log(minMaxResultES6);