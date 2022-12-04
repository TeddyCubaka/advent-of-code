import * as fs from "fs";

let count: number = 0;
let sum: number = 0;

function comparator(arr1: number[], arr2: number[]) {
	if (arr1[0] <= arr2[0] && arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
		count += 1;
	} else if (
		arr1[0] >= arr2[0] &&
		arr1[arr1.length - 1] <= arr2[arr2.length - 1]
	) {
		count += 1;
	}
	return;
}

function overlap(arr1: number[], arr2: number[]) {
	if (arr1[0] <= arr2[1] && arr1[1] >= arr2[0]) {
		sum += 1;
	} else if (arr1[0] >= arr2[1] && arr1[1] <= arr2[0]) {
		sum += 1;
	}
}

fs.readFile("input.txt", (err, data) => {
	if (err) throw err;
	let res = data.toString().split("\n");
	let split = res.map((data) => {
		return data.split(",");
	});
	let compare = split.map((data) => {
		let i1: string[] = data[0].split("-");
		let i2: string[] = data[1].split("-");
		let num1: number[] = i1.map((str) => {
			return parseInt(str, 10);
		});
		let num2: number[] = i2.map((str) => {
			return parseInt(str, 10);
		});
		comparator(num1, num2);
		overlap(num1, num2);
	});
	console.log("count :", count);
	console.log("sum :", sum);
});
