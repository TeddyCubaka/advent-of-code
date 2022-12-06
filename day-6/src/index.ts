import * as fs from "fs";
const _ = require("lodash");

fs.readFile("inputs.txt", (err, res) => {
	if (err) throw err;
	let arr: string[] = res.toString().split("");
	let i = 0;
	while (i >= 0) {
		const temp: string[] = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]];
		const unique: string[] = _.uniq(temp);
		if (unique.length === 4) console.log("first question :", i + 4);
		if (unique.length === 4) break;
		i++;
	}

	let a = 0;
	while (a >= 0) {
		const temp: string[] = [];
		for (let i = a; i < 14 + a; i++) {
			temp.push(arr[i]);
		}
		const unique: string[] = _.uniq(temp);
		if (unique.length === 14) {
			console.log("second question :", a + 14);
		}
		if (unique.length === 14) break;
		a++;
	}
});
