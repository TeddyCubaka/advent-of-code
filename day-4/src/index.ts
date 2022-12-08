import * as fs from "fs";

let count_conteners: number = 0;
let count_count_overlappers: number = 0;

function comparator(arr1: number[], arr2: number[]) {
	if (arr1[0] <= arr2[0] && arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
		count_conteners += 1;
	} else if (
		arr1[0] >= arr2[0] &&
		arr1[arr1.length - 1] <= arr2[arr2.length - 1]
	) {
		count_conteners += 1;
	}
	return;
}

function overlap(arr1: number[], arr2: number[]) {
	if (arr1[0] <= arr2[1] && arr1[1] >= arr2[0]) {
		count_count_overlappers += 1;
	} else if (arr1[0] >= arr2[1] && arr1[1] <= arr2[0]) {
		count_count_overlappers += 1;
	}
}

fs.readFile("input.txt", (err, data) => {
	if (err) throw err;
	let elves_places: string[][] = data
		.toString()
		.split("\n")
		.map((data) => {
			return data.split(",");
		});
	let compare = elves_places.map((data) => {
		let first_places: string[] = data[0].split("-");
		let second_places: string[] = data[1].split("-");
		let first_elf_s_places: number[] = first_places.map((str) => {
			return parseInt(str, 10);
		});
		let second_elf_s_places: number[] = second_places.map((str) => {
			return parseInt(str, 10);
		});
		comparator(first_elf_s_places, second_elf_s_places);
		overlap(first_elf_s_places, second_elf_s_places);
	});
	console.log("first output :", count_conteners);
	console.log("second output :", count_count_overlappers);
});
