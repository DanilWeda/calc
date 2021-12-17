// linked
let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let showResult = document.getElementById('showResult');
let result = document.getElementById('result');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

// variable 
let num1 = 0;
let num2 = 0;
let res = 0;


// func
function plusFn(a,b) {
	res = a + b
	return res
}
function minusFn(a, b) {
  res = a - b;
  return res;
}
function multiplyFn(a, b) {
  res = a * b;
  return res;
}
function divideFn(a,b) {
	res = a / b
	return res
}

// inp listener 
firstNum.addEventListener('input', (e) => {
	num1 = +e.target.value
})
secondNum.addEventListener('input', (e) => {
	num2 = +e.target.value
})

// call func
plus.addEventListener('click', () => {
	plusFn(num1, num2)
})
minus.addEventListener('click', () => {
	minusFn(num1, num2)
})
multiply.addEventListener('click', () => {
	multiplyFn(num1, num2)
})
divide.addEventListener('click', () => {
	divideFn(num1, num2)
})


// give result
result.addEventListener('click', () => {
	showResult.innerHTML = `RESULT : ${Math.trunc(res)}`;
})
