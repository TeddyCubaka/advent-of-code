import * as fs from "fs";

interface Stack {
	index: number;
	suite: string[];
}

let first_stack_repository: Stack[] = [];
let second_stack_repository: Stack[] = [];
let craters_position: number[] = [];

let top_crater_of_CM_9000: string = "";
let top_crater_of_CM_9001: string = "";

function CrateMover9000(arr: string[]): string {
	arr.map((data) => {
		const crater_moved = data.split(" ");
		for (let i = 0; i < parseInt(crater_moved[1]); i++) {
			first_stack_repository[parseInt(crater_moved[5]) - 1].suite.unshift(
				first_stack_repository[parseInt(crater_moved[3]) - 1].suite[i]
			);
		}
		first_stack_repository[parseInt(crater_moved[3]) - 1].suite.splice(
			0,
			parseInt(crater_moved[1])
		);
	});
	first_stack_repository.map((data) => {
		top_crater_of_CM_9000 += data.suite[0];
	});
	return top_crater_of_CM_9000;
}

function CrateMover9001(arr: string[]): string {
	arr.map((data) => {
		const crater_moved = data.split(" ");
		for (let i = parseInt(crater_moved[1]) - 1; i >= 0; i--) {
			second_stack_repository[parseInt(crater_moved[5]) - 1].suite.unshift(
				second_stack_repository[parseInt(crater_moved[3]) - 1].suite[i]
			);
		}
		second_stack_repository[parseInt(crater_moved[3]) - 1].suite.splice(
			0,
			parseInt(crater_moved[1])
		);
	});
	second_stack_repository.map((data) => {
		top_crater_of_CM_9001 += data.suite[0];
	});
	return top_crater_of_CM_9001;
}

fs.readFile("stacks.txt", (err, data) => {
	if (err) throw err;
	const res: string[] = data.toString().split("\n");
	res[res.length - 1].split("").map((data, index) => {
		if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90)
			craters_position.push(index);
	});
	craters_position.map((index) => {
		first_stack_repository.push({
			index: index,
			suite: [],
		});
		second_stack_repository.push({
			index: index,
			suite: [],
		});
	});
	res.map((data) => {
		data.split("").map((str, index) => {
			if (craters_position.indexOf(index) > -1 && str !== " ") {
				first_stack_repository[craters_position.indexOf(index)].suite.push(str);
				second_stack_repository[craters_position.indexOf(index)].suite.push(str);
			}
		});
	});

	fs.readFile("instructions.txt", (err, res) => {
		if (err) throw err;
		//first question output
		console.log("first string :", CrateMover9000(res.toString().split("\n")));

		//second question output
		console.log(
			"second question :",
			CrateMover9001(res.toString().split("\n"))
		);
	});
});
