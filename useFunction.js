//!Давайте запишем в новый массив только те элементы, сумма первых двух цифр в которых равна сумме вторых двух цифр.
let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];

for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);
	}
}

console.log(result);

function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);

	return sum1 == sum2;
}

//!Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
//С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');

	for (let digit of digits) {
		sum += Number(digit);
	}
	return sum;
}

const arrYears = (yearStart, yearFinish) => {
	const arrSummNumbersYears = [];
	for (let i = yearStart; i <= yearFinish; i++) {
		if (getDigitsSum(i) === 13) {
			arrSummNumbersYears.push(i);
		}
	}
	return arrSummNumbersYears;
}

console.log(arrYears(1, 2030));

//!Дана функция, проверяющая числа на простоту. 
//С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
//console.log(isPrime(4));
const primeNumbers = [];
for (let i = 1; i <= 100; i++) {
	if (isPrime(i)) {
		primeNumbers.push(i);
	}
}
console.log(primeNumbers);

//!Пусть дан какой-то массив с числами, например, такой:
//[123, 456, 789]
//Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий: [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

const nums = [123, 456, 789];

const numReverse = number =>
	Number(String(number).split('').reverse().join(''));
//console.log(numReverse(123));

const reverseArrayElements = (arr) => {
	const result1 = [];
	for (let elem of arr) {
		const resultNumReverse = numReverse(elem);
		result1.push(resultNumReverse);
	}
	return result1
}

console.log(reverseArrayElements(nums)); // выведет [321, 654, 987]

//!Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:
//В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

let num1 = 234;
let num2 = 531;

// let digits1 = String(num1).split('');
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

const getSumNumbers = num => {
	let getSummArrNumbers = 0;
	let arrNumbers = String(num).split('');
	for (let arrNumber of arrNumbers) {
		getSummArrNumbers += Number(arrNumber);
	}
	return getSummArrNumbers;
}
//console.log(getSumNumbers(123));

const comparisonNumbers = (numOne, numTwo) =>
	// if (getSumNumbers(numOne) === getSumNumbers(numTwo)) {
	// 	console.log('сумма чисел равна')
	// } else {
	// 	console.log('сумма чисел не равна');
	// }
	getSumNumbers(numOne) === getSumNumbers(numTwo)
		? console.log('сумма чисел равна')
		: console.log('сумма чисел не равна')

comparisonNumbers(num1, num2);

//!Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
//Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
//Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

let arr2 = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

function getDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}
console.log(getDivisors(10));

const arrGetDivisors = arr => {
	let arrResult = []
	for (let num of arr) {
		const divisors = getDivisors(num);
		if (divisors.length > 0) arrResult = arrResult.concat(divisors);		
	}
	return arrResult;
}
console.log(arrGetDivisors(arr2));


