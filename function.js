// Сделайте функцию, выводящую на экран ваше имя.
const pushAlert = () => {
  //alert('Alex');
  console.log(name => 'Alex');
}
pushAlert();

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
const getSumm = () => {
  let a = 1;
  for (i = 0; i <= 100; i++) {
    a += i;
  }
  console.log('a -->', a)
}
getSumm();

//Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
const getResult = (num) => {
  num **= 2;
  console.log('num -->', num);
}
getResult(3);

//Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'
const getResult2 = (num) => {
  if (num < 0) {
    console.log('---')
  } else if (num > 0) {
    console.log('+++');
  } else {
    console.log('getResult2 = 0');
  }
}
getResult2(-1);

//Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
const getSumm3 = (num1, num2, num3) => {
  console.log('getSumm3 -->', num1 + num2 + num3);
}
getSumm3(3, 5, 6);

//Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
const getSumm4 = (num1, num2, num3) => {
  console.log('getSumm4 -->', num1 + num2 + num3)
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
getSumm4(param1, param2, param3);

//Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
const getResult4 = num => num **= 3;
const result4 = getResult4(3);
console.log('getResult4 -->', result4);

const getResult5 = num => {
  return num **= 3;
}
const result5 = getResult5(3);
console.log('getResult5 -->', result5);

//Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
const getResults6 = num => Math.sqrt(num);

const getResults6Finish = getResults6(3) + getResults6(4);
console.log('getResults6 -->', getResults6Finish);

//Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
//С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
const sqrt = num => Math.sqrt(num);
const round = num => num.toFixed(3);

const result = round(sqrt(2));
console.log('round(sqrt(2)) -->', result);
console.log('sqrt(2)-->', sqrt(2));

//Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
//С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
const sqrt2 = num => Math.sqrt(num);
const sum = (num1, num2, num3) => num1 + num2 + num3;

const result6 = sum(sqrt2(2), sqrt2(3), sqrt2(4));
console.log('sum(sqrt2(2), sqrt2(3), sqrt2(4))-->', result6)

//Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
//С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.
const round2 = num => num.toFixed(3);
const result7 = round2(sum(sqrt2(2), sqrt2(3), sqrt2(4)));
console.log('toFixed(3)-->', result7);

//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
const getRsult7 = num => {
  for (let i = 1; num >= 10; i++) {
    if ((num /= 2) < 10) return i;
  }

  // let sum = num;
  // let i = 1;
  // let del = 2;

  // while (true) {
  //   sum /= del;

  //   if (sum < 10) {
  //     return i;
  //   }
  //   i++;
  // }
}
console.log('getRsult7-->', getRsult7(10));

//Дана следующая функция: Перепишите ее в сокращенной форме согласно изученной теории.
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

const func = (num1, num2) => {

  if (num1 > 0 && num2 > 0) return num1 * num2;
  else return num1 - num2;
}
console.log('3*4 -->', func(3, 4));

//Напишите функцию, которая будет находить сумму квадратов элементов массива.

const summArr3 = arr => {
  let summ3 = 0;
  for (let elem of arr) {
    summ3 += elem ** 2;
  }
  return summ3;
}

let arr3 = [1, 2, 3, 4];
console.log('summArr3 -->', summArr3(arr3));

//Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.
const getDigitsSum = num => {
  let sum4 = 0;
  let arr4 = Array.from(String(num), Number);
  for (let elem of arr4) sum4 += elem;
  return sum4;
}
let arr5 = 123;
console.log(getDigitsSum(arr5));

//Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число.
const getDivisors = num => {
  let arr1 = []
  for (let i = 0; i <= num; i++) if (num % i == 0) arr1.push(i);
  return arr1;
}
let LetgetDivisors = 24;
console.log(getDivisors(LetgetDivisors));

//Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
// const reverseStr = string => {
//   const arr = string.split('');
//   const arrReverse = arr.reverse();
//   const resultArrReverse = arrReverse.join('');
//   return resultArrReverse;
// }

const reverseStr = string => string.split('').reverse().join('');
const parametrReverseStr = 'sasha';
console.log(reverseStr(parametrReverseStr));

//Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
//! удаляет только одно значение
// const delElem = (elemArr, arr) => {
//   i = arr.indexOf(elemArr);
//   if(i >= 0) {
//     arr.splice(i, 1);
//   }
//   return arr;
// }
// console.log(delElem(-4, [3, 5, -4, 6]));

const delElem = (elemArr, arr) => {
  arr = arr.filter((n) => { return n != elemArr })
  return arr;
}
console.log(delElem(4, [3, 5, 4, 6, 4]));

//Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции
// const getArr = (num4) => {
//   let arr = [];
//   for (let i = 0; i <= num4; i++){
//     arr.push(i);
//   }
//   return arr;
// }
// let numberForGetArr = 8;
// console.log(getArr(numberForGetArr));

let text = document.querySelector('[data-text]');
const getArr = num4 => {
  let arr = [];
  for (let i = 0; i <= num4; i++) arr.push(i);
  return arr;
}
let numberForGetArr = 8;
console.log(getArr(numberForGetArr));
text.innerHTML = getArr(numberForGetArr);

//Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. 
const getArr2 = (numStart, numFinish) => {
  let arr2 = [];
  for (let i = numStart; i <= numFinish; i++) {
    arr2.push(i);
  }
  return arr2;
}
let numStart = 3;
let numFinish = 10;
console.log(getArr2(numStart, numFinish));

// флаги в функции
const getFlag = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(getFlag(8));

//Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
// const arrNumbers = arr => {
//   for (let elem of arr) {
//     if (elem %2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(arrNumbers([6, 4, 6, 8]));

const arrNumbers = arr => {
  for (let elem of arr) if (elem % 2 !== 0) return false;
  return true;
}
console.log(arrNumbers([1, 4, 6, 8]));

//Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными
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

const arrNumbers2 = num => {
  let getArr4 = Array.from(String(num), Number);
  for (let elem of getArr4) if (elem % 2 === 0) return false;
  return true;
}
console.log(arrNumbers2(778));

//Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд
const getArr4 = arr6 => {
  for (let i = 0; i < arr6.length; i++){
    if (arr6[i] == arr6[i+1]){
      return true  + ' ' + 'arr[i] повторяется';
    }
  }
  return false  + ' ' + 'arr[i] не повторяется';;
}
console.log(getArr4([1, 5, 9, 6, 8]));
