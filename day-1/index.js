const fs = require("fs");

fs.readFile("inputs.txt", (err, res) => {
	if (err) throw err;
	const data = res.toString().split("\n" + "" + "\n");
	let sums = [];
	let numbers = data.map((data) => {
		return data.split("\n").map((str) => {
			return parseInt(str);
		});
	});
	numbers.map((nums) => {
		let count = 0;
		nums.map((num) => (count += num));
		sums.push(count);
	});
	//first question output
	console.log("first question :", Math.max(...sums));

	let count2 = 0;
	for (let i = 0; i < 3; i++) {
		const biger = Math.max(...sums);
		count2 += biger;
		sums.splice(sums.indexOf(biger), 1);
	}
	//second question output
	console.log("second question :", count2);
});
