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
console.log('getResult4 -->',result4);

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
const result7 =  round2(sum(sqrt2(2), sqrt2(3), sqrt2(4)));
console.log('toFixed(3)-->', result7);

//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
const getRsult7 = num => {
  for (let i = 1; num >= 10; i++ ) {
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