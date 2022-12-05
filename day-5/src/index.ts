import * as fs from "fs";

interface Stack {
	index: number;
	suite: string[];
}

let stacks: Stack[] = [];

let position: number[] = [];
let topCrate: string = "";

fs.readFile("inputs.txt", (err, data) => {
	if (err) throw err;
	const res: string[] = data.toString().split("\n");
	let myStr = res[res.length - 1];

	myStr.split("").map((data, index) => {
		if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90)
			position.push(index);
	});

	position
		.sort((a, b) => a - b)
		.map((index) => {
			stacks.push({
				index: index,
				suite: [],
			});
		});

	res.map((data, id) => {
		data.split("").map((str, index) => {
			if (position.indexOf(index) > -1 && str !== " ")
				stacks[position.indexOf(index)].suite.push(str);
		});
	});

	fs.readFile("range.txt", (err, res) => {
		if (err) throw err;
		res
			.toString()
			.split("\n")
			.map((data) => {
				const move = data.split(" ");
				const i1 = parseInt(move[1]);
				const i2 = parseInt(move[3]) - 1;
				const i3 = parseInt(move[5]) - 1;
				const s1 = stacks[i2].suite;
				const s2 = stacks[i3].suite;

				for (let i = 0; i < i1; i++) {
					s2.unshift(s1[i]);
				}
				s1.splice(0, i1);
			});
		stacks.map((data) => {
			topCrate += data.suite[0];
		});
		console.log(topCrate);
	});
});
