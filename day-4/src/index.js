"use strict";
exports.__esModule = true;
var fs = require("fs");
var count_conteners = 0;
var count_count_overlappers = 0;
function comparator(arr1, arr2) {
    if (arr1[0] <= arr2[0] && arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
        count_conteners += 1;
    }
    else if (arr1[0] >= arr2[0] &&
        arr1[arr1.length - 1] <= arr2[arr2.length - 1]) {
        count_conteners += 1;
    }
    return;
}
function overlap(arr1, arr2) {
    if (arr1[0] <= arr2[1] && arr1[1] >= arr2[0]) {
        count_count_overlappers += 1;
    }
    else if (arr1[0] >= arr2[1] && arr1[1] <= arr2[0]) {
        count_count_overlappers += 1;
    }
}
fs.readFile("input.txt", function (err, data) {
    if (err)
        throw err;
    var elves_places = data
        .toString()
        .split("\n")
        .map(function (data) {
        return data.split(",");
    });
    var compare = elves_places.map(function (data) {
        var first_places = data[0].split("-");
        var second_places = data[1].split("-");
        var first_elf_s_places = first_places.map(function (str) {
            return parseInt(str, 10);
        });
        var second_elf_s_places = second_places.map(function (str) {
            return parseInt(str, 10);
        });
        comparator(first_elf_s_places, second_elf_s_places);
        overlap(first_elf_s_places, second_elf_s_places);
    });
    console.log("first output :", count_conteners);
    console.log("second output :", count_count_overlappers);
});
