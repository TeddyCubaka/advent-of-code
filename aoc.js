const fs = require("fs");
const path = "input.txt";

const me = ["X", "Y", "Z"];
let result = [];
let count = 0;
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
	});
	result.map((num) => (count += num));
});
