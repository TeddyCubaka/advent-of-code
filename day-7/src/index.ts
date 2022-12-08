import * as fs from "fs";

let count = 0;
let count2Point = 0;

interface Dir {
	name: string;
	size: number;
}

function isNumeric(val: string) {
	return /^-?\d+$/.test(val);
}

let repos: Dir[] = [];
let temp: Dir[] = [];

const get_point = (str: string) => {
	let data = str.split(" ")[0];
	if (isNumeric(data)) return Number(data);
	return 0;
};

fs.readFile("inputs.txt", (err, res) => {
	if (err) throw err;
	const data: string[] = res.toString().split("\n");
	data.map((str, index) => {
		if (str.indexOf("$ cd ") > -1) {
			if (str.split(" ")[2] == "..") {
				repos.push(temp[0]);
				temp[1].size += temp[0].size;
				count2Point += 1;
				temp.splice(0, 1);
				return;
			} else {
				temp.unshift({
					name: str,
					size: 0,
				});
				return;
			}
		} else if (index == data.length - 1) {
			temp[0].size += get_point(str);
			temp.map((item) => {
				repos.push(item);
			});
			return;
		} else {
			temp[0].size += get_point(str);
			return;
		}
	});

	repos.map((item) => {
		if (item.size <= 100000) count += item.size;
	});
	console.log(count);
	console.log(count2Point);
	
});
