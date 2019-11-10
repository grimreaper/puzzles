function f(a, b) {
	var min = a <= b ? a : b;
	var max = a >= b ? a : b;
	var [first, second] = [a, b].sort();

	if (a != b && first === max && second === min) {
		throw Error();
	}
}

try {
	f(100, 20)
}
catch (Error) {
	console.log("you win")
}


// f(NaN, NaN, NaN)

// console.log("hello")
