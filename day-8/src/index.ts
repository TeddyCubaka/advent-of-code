import * as fs from "fs";
const _ = require("lodash");

let horizontal_view: number[][] = [];
let vertical_view: number[][] = [];
let trees_can_be_seen: number[][] = [];

const data: string[] = fs
	.readFileSync("./inputs.txt", {
		encoding: "utf8",
		flag: "r",
	})
	.split("\n");

horizontal_view = data.map((range): number[] => {
	const getRange: number[] = range.split("").map((tree: string) => {
		return Number(tree);
	});
	return getRange;
});

//get vertical view of the forest
horizontal_view.map((range, index) => {
	if (index == 0) range.map((item) => vertical_view.push([item]));
	else
		range.map((item, place) => {
			vertical_view[place].push(item);
		});
});

function get_indexes(array: number[]) {
	let taller = 0;
	const response = array.map((data, index) => {
		if (index == 0) {
			taller = data;
			return index;
		}
		if (data > taller) {
			taller = data;
			return index;
		}
		if (data <= taller) return -8;
		else return -8;
	});
	return response.filter((data) => data >= 0);
}
function get_indexes_inverse(array: number[]) {
	let taller = 0;
	const response = array.map((data, index) => {
		if (index == 0) {
			taller = data;
			return array.length - 1 - index;
		}
		if (data > taller) {
			taller = data;
			return array.length - 1 - index;
		}
		if (data <= taller) return -8;
		else return -8;
	});
	return response.filter((data) => data >= 0);
}

const view_from_top: number[][] = vertical_view.map((data) =>
	get_indexes(data)
);
const view_from_bottom: number[][] = vertical_view.map((data) =>
	get_indexes_inverse(data.reverse())
);
const view_from_left: number[][] = horizontal_view.map((data) =>
	get_indexes(data)
);
const view_from_right: number[][] = horizontal_view.map((data) =>
	get_indexes_inverse(data.reverse())
);

const trees_seen_horizontaly: number[][] = view_from_left.map((data, index) => {
	let temporal: number[] = data.concat(view_from_right[index]);
	return _.uniq(temporal);
});

const trees_seen_verticaly: number[][] = view_from_top.map((data, index) => {
	let temporal: number[] = data.concat(view_from_bottom[index]);
	return _.uniq(temporal);
});

trees_can_be_seen = trees_seen_horizontaly;

trees_seen_verticaly.map((data, index) => {
	data.map((tree) => {
		trees_can_be_seen[tree].push(index);
	});
});
const arr = trees_can_be_seen.map((data) => _.uniq(data));
let number_of_trees_wich_can_seen = 0;
arr.map((data) => (number_of_trees_wich_can_seen += data.length));

horizontal_view = horizontal_view.map((item) => {
	return item.reverse();
});
vertical_view = vertical_view.map((item) => {
	return item.reverse();
});

const taller_from_right = (arr: number[], index: number): number => {
	if (index == arr.length - 1) return 0;
	let stock: number[] = [];
	for (let i = index + 1; i < arr.length; i++) {
		if (arr[i] >= arr[index]) stock.push(i - index);
		if (i == arr.length - 1) stock.push(i - index);
	}
	return stock[0];
};
const taller_from_left = (arr: number[], index: number): number => {
	if (index == 0) return 0;
	let stock: number[] = [];
	for (let i = index - 1; i > -1; i--) {
		if (arr[i] >= arr[index]) stock.push(index - i);
		if (i == 0) stock.push(index - i);
	}
	return stock[0];
};

const scenics_scores = horizontal_view.map((range, index) => {
	return range.map((item, place) => {
		return (
			taller_from_left(range, place) *
			taller_from_right(range, place) *
			taller_from_left(vertical_view[place], index) *
			taller_from_right(vertical_view[place], index)
		);
	});
});

let ideal_score: number = 0;
scenics_scores.map((range) => {
	if (Math.max(...range) > ideal_score) ideal_score = Math.max(...range);
});

//first question
console.log(number_of_trees_wich_can_seen);
//second question
console.log(ideal_score);
