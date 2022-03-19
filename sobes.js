'use strict'

//! получение свойства объекта
const man = {
  name: "Alex",
  age: 24,
  sayHello: function () {
    //alert('Hello')
    console.log('Hello!')
  }
}

man.sayHello();

const result = man.name;
console.log(result);

//! палиндром
const isPalindrom = (string) => {
  const arr = string.split(''); // метод разбивки строки на массив по символам
  const reverseArr = arr.reverse(); // метод переворота символов слова
  const resString = reverseArr.join(''); // метод сборки перевернутого слова
  const res = arr === resString;
  return res;
}

const finishRes = isPalindrom('dog');
console.log(finishRes);

//es6
const palindromES6 = str => str === str.split('').reverse().join('');
const funishES6 = palindromES6('bob');
console.log(funishES6);

//! функция поиска самого короткого слова
const findShorts = (string) => {
  const wordsArr = string.split(' '); // метод разбивки предложения на массив по словам ("пробел!!!")
  const sortedWordsArr = wordsArr.sort((a, b) => {
    return a.length - b.length;  // сортировка массива по длине слова
  });
  return sortedWordsArr[0];
}
const minWord = findShorts('hi y a cat');
console.log(minWord);

//es6
const findShortsES6 = string =>
  string
    .split(' ')
    .sort((a, b) => a.length - b.length)[0];

let minWordES6 = findShortsES6('am i cat');
console.log(minWordES6);

//! counter

// const counterFunc = () => {
//   let counter = 0;
//   if (counter <= 5) {

//     console.log(counter);
//   }counter++;
// }
// setInterval((counterFunc), 1000);

let text = document.querySelector('[data-text]')
const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    text.innerHTML = current;
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 100);
}
// использование:
printNumbers(1, 10);

//! setInterval
let timer = setInterval(() => {
  console.log('abc')
}, 10000)
clearInterval(timer);

//! функция создания инициалов
const toInitials = (name) => {
  const nameArr = name.split(' '); // разбиваем строку на массив по словам
  const firstLetttersArr = nameArr.map((el) => {
    return el.slice(0, 1).toUpperCase() + '.'
  }); // перебор массива .map с отрезанием первой буквы .slice и переводом в верх регистр с доб. точки
  const initials = firstLetttersArr.join(''); // превращае массив в строку
  return (initials);
}
const returnInitials = toInitials('alex shnipov')
console.log(returnInitials);

//es6
const toInitialsES6 = name =>
  name
    .split(' ')
    .map(el => `${el.slice(0, 1).toUpperCase()}.`)
    .join('')
const returnInitialsES6 = toInitialsES6('alex fedorovich');
console.log(returnInitialsES6);

//! функция суммирования всех чисел числа
const sumDigits = (number) => {
  const moduleNumber = Math.abs(number); // метод - берет число по модулю в результате оно всегда положительное
  const str = moduleNumber.toString(); // метод - переводит число в строку
  const arr = str.split(''); // метод - переводит число в массив из чисел
  const res = arr.reduce((sum, cur) => {
    return Number(sum) + Number(cur)
  }, 0); //суммирует значение чисел
  return (res);
}
const summ = sumDigits(255);
alert(summ);

//es6
const sumDigitsES6 = number =>
  Mach.abs(number)
    .toString()
    .split()
    .reduce((sum, cur) => +sum + +cur, 0);
const summES6 = sumDigits(24);
alert(summES6);

//! чистая функция
const add = (a, b) => a + b;
add(4, 4);
const summm = add(4, 4);
console.log(summm);

//не чистая -- результат зависит от значения внешней переменной
let a = 5;
const summ2 = y =>
  a += y;
let result2 = summ2(4);
console.log(result2);

//! функция поиска максимального и минимального значения
const minMax = (arr) => {
  let res = [];
  let minValue = Math.min.apply(null, arr);
  let maxValue = Math.max.apply(null, arr);
  res = ([minValue, maxValue]);
  return res
}
let minMaxResult = minMax([4, 9, 2, 1]);
console.log('minMaxResult-->', minMaxResult);

//es6
const minMaxes6 = (arr) =>
[Math.min(...arr), Math.max(...arr)];
let minMaxResultES6 = minMaxes6([4, 3, 5, 8]);
console.log(minMaxResultES6);

































