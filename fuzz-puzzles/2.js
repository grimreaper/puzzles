function f(a, b) {
	if (a > b || a == b) {
		return true;
	} else if (a >= b) {
		throw Error();
	} else {
		return false;
	}
}

console.log(0 > null)
console.log(0 == null)
console.log(0 >= null)

try {
	f(0, null)
}
catch (Error) {
	console.log("you win")
}


// f(NaN, NaN, NaN)

// console.log("hello")
