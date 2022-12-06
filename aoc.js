const fs = require("fs");
const path = "input.txt";

// first challenge

const me = ["X", "Y", "Z"];
let result = [];
let result2 = [];
let count = 0;
let count2 = 0;
const getPoint = (opp, str) => {
	if (str === "X") {
		if (opp === "A") return 3;
		if (opp === "B") return 0;
		if (opp === "C") return 6;
	} else if (str === "Y") {
		if (opp === "A") return 6;
		if (opp === "B") return 3;
		if (opp === "C") return 0;
	} else if (str === "Z") {
		if (opp === "A") return 0;
		if (opp === "B") return 6;
		if (opp === "C") return 3;
	}
};

const getMyPoint = (opp, str) => {
	if (str === "X") {
		if (opp === "A") return 3;
		if (opp === "B") return 1;
		if (opp === "C") return 2;
	} else if (str === "Y") {
		if (opp === "A") return 4;
		if (opp === "B") return 5;
		if (opp === "C") return 6;
	} else if (str === "Z") {
		if (opp === "A") return 8;
		if (opp === "B") return 9;
		if (opp === "C") return 7;
	}
};

fs.readFile(path, (err, data) => {
	let games = [];
	if (err) throw err;
	games = data.toString().split("\n");
	games.map((val) => {
		result.push(
			me.indexOf(val.split(" ")[1]) +
				1 +
				getPoint(val.split(" ")[0], val.split(" ")[1])
		);
		result2.push(getMyPoint(val.split(" ")[0], val.split(" ")[1]));
	});

	//the unser for the first question
	result.map((num) => (count += num));
	console.log("first question :", count);

	//the unser for the second question
	result2.map((num) => (count2 += num));
	console.log("second question :", count2);
});
