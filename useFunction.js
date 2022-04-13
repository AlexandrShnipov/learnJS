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



