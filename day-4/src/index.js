"use strict";
exports.__esModule = true;
var fs = require("fs");
var count = 0;
var sum = 0;
function comparator(arr1, arr2) {
    if (arr1[0] <= arr2[0] && arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
        count += 1;
    }
    else if (arr1[0] >= arr2[0] &&
        arr1[arr1.length - 1] <= arr2[arr2.length - 1]) {
        count += 1;
    }
    return;
}
function overlap(arr1, arr2) {
    if (arr1[0] <= arr2[1] && arr1[1] >= arr2[0]) {
        sum += 1;
    }
    else if (arr1[0] >= arr2[1] && arr1[1] <= arr2[0]) {
        sum += 1;
    }
}
fs.readFile("input.txt", function (err, data) {
    if (err)
        throw err;
    var res = data.toString().split("\n");
    var split = res.map(function (data) {
        return data.split(",");
    });
    var compare = split.map(function (data) {
        var i1 = data[0].split("-");
        var i2 = data[1].split("-");
        var num1 = i1.map(function (str) {
            return parseInt(str, 10);
        });
        var num2 = i2.map(function (str) {
            return parseInt(str, 10);
        });
        comparator(num1, num2);
        overlap(num1, num2);
    });
    console.log("count :", count);
    console.log("sum :", sum);
});
