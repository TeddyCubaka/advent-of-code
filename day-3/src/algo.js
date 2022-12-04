"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = "inputs.txt";
var _ = require("lodash");
var items = [
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
var count = 0;
function filterArr(arr1, arr2) {
    var arr = [];
    arr1.map(function (data) {
        if (arr2.indexOf(data) !== -1)
            arr.push(data);
    });
    count += items.indexOf(arr[0]) + 1;
}
fs.readFile(path, "utf8", function (err, data) {
    var strs = data.split("\n");
    strs.map(function (str) {
        var semi = str.split("");
        var t1 = semi.slice(0, semi.length / 2);
        var t2 = semi.slice(semi.length / 2, semi.length);
        var set1 = _.uniq(t1);
        var set2 = _.uniq(t2);
        filterArr(set1, set2);
    });
    console.log(count);
});
