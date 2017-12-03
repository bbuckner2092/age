var age = Number(prompt("What is your age?"));
if (age < 0) {
	console.log("Come back when you are out the womb");
}

if (age === 21) {
	console.log("happy 21 birthday!");
}

if (age % 2 !== 0) {
	console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}