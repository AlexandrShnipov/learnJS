//!Поиск ошибок в коде с функциями JavaScript
//Код должен найти сумму результатов работы двух функций
function func1() {
  console.log(3);
  return 3; //+
}
function func2() {
  console.log(5);
  return 5; //+
}
console.log(func1() + func2());

//Код должен найти сумму элементов массива:
function sum5(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
    //return res; // mistake
	}
  	return res; // +
}
console.log(sum5([1, 2, 3, 4, 5]));

//Код должен найти сумму элементов массива, однако, ничего не выводит на экран:
let arr10 = [1, 2, 3, 4, 5];

function func10(num) {
	let res = 0;
	
	for (let elem of arr10) {
		res += elem;
	}	
	return res; //+
}
console.log(func10(arr10)); //+

//Код должен найти сумму результатов работы двух функций:

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() ); //added ();

//Код должен найти сумму элементов массива:
// let sum = sum([1, 2, 3, 4, 5]);
// alert(sum);
// function sum(arr) {
// 	let sum = 0;
	// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	// 	return elem;
// }

let sum6 = [1, 2, 3, 4, 5];

function sum7(num) {
	let sum = 0;
		for (let elem of num) {
		sum += elem;
	}
		return sum;
}
console.log(sum7(sum6));

//Код должен найти сумму элементов массива:
// let res = sum([1, 2, 3, 4, 5]);
// alert(res);
// function sum(arr) {
// 	let sum = 0;
	// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// }

let res = [1, 2, 3, 4, 5];
//alert(res);

function sum8(num) {
	let sum = 0;
	
	for (let elem of res) {
		sum += elem;
	}
  return sum;
}
console.log(sum8(res));

//Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// }

function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
    return num;
  }
}
console.log(add(8));

//Код должен найти сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// let sum = sum(arr);
// console.log(sum);
// function sum(arr) {
// 	let res = 0;
// 		for (let elem of arr) {
// 		res += elem;
// 	}
// 		return res;
// }

let arr = [1, 2, 3, 4, 5];
//console.log(sum10);

function sum11(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}	
	return res;
}
console.log(sum11(arr));



//Код должен найти сумму цифр числа:

let num10 = 22345;

function getDigitsSum1(num) { 

	let arr = String(num).split('');
 // console.log(arr);
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}
let res10 = getDigitsSum1(num10);
console.log(res10);