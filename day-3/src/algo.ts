import * as fs from "fs";
const path: string = "inputs.txt";
const _ = require("lodash");

let items: string[] = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
let count: number = 0;
let sum: number = 0;

function filterArr(arr1: string[], arr2: string[]) {
	let arr: string[] = [];
	arr1.map((data) => {
		if (arr2.indexOf(data) !== -1) arr.push(data);
	});
	count += items.indexOf(arr[0]) + 1;
}

fs.readFile(path, "utf8", (err, data) => {
	if (err) throw err;
	let strs: string[] = data.split("\n");
	let groups = [];

	strs.map((str) => {
		const semi = str.split("");

		let t1: string[] = semi.slice(0, semi.length / 2);
		let t2: string[] = semi.slice(semi.length / 2, semi.length);

		const set1 = _.uniq(t1);
		const set2 = _.uniq(t2);
		filterArr(set1, set2);
	});
	strs.forEach((data, index) => {
		if (index % 3 == 0) {
			let group: string[] = [];
			group = strs.slice(index, index + 3);
			let common: string[] = [];
			group[0].split("").map((data) => {
				if (group[1].indexOf(data) !== -1 && group[2].indexOf(data) !== -1)
					common.push(data);
			});
			sum += items.indexOf(common[0]) + 1;
		}
	});
	console.log(count); //first question
	console.log(sum); //second question
});
