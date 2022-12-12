"use strict";
exports.__esModule = true;
var fs = require("fs");
var first_stack_repository = [];
var second_stack_repository = [];
var craters_position = [];
var top_crater_of_CM_9000 = "";
var top_crater_of_CM_9001 = "";
function CrateMover9000(arr) {
    arr.map(function (data) {
        var crater_moved = data.split(" ");
        for (var i = 0; i < parseInt(crater_moved[1]); i++) {
            first_stack_repository[parseInt(crater_moved[5]) - 1].suite.unshift(first_stack_repository[parseInt(crater_moved[3]) - 1].suite[i]);
        }
        first_stack_repository[parseInt(crater_moved[3]) - 1].suite.splice(0, parseInt(crater_moved[1]));
    });
    first_stack_repository.map(function (data) {
        top_crater_of_CM_9000 += data.suite[0];
    });
    return top_crater_of_CM_9000;
}
function CrateMover9001(arr) {
    arr.map(function (data) {
        var crater_moved = data.split(" ");
        for (var i = parseInt(crater_moved[1]) - 1; i >= 0; i--) {
            second_stack_repository[parseInt(crater_moved[5]) - 1].suite.unshift(second_stack_repository[parseInt(crater_moved[3]) - 1].suite[i]);
        }
        second_stack_repository[parseInt(crater_moved[3]) - 1].suite.splice(0, parseInt(crater_moved[1]));
    });
    second_stack_repository.map(function (data) {
        top_crater_of_CM_9001 += data.suite[0];
    });
    return top_crater_of_CM_9001;
}
fs.readFile("stacks.txt", function (err, data) {
    if (err)
        throw err;
    var res = data.toString().split("\n");
    res[res.length - 1].split("").map(function (data, index) {
        if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90)
            craters_position.push(index);
    });
    craters_position.map(function (index) {
        first_stack_repository.push({
            index: index,
            suite: []
        });
        second_stack_repository.push({
            index: index,
            suite: []
        });
    });
    res.map(function (data) {
        data.split("").map(function (str, index) {
            if (craters_position.indexOf(index) > -1 && str !== " ") {
                first_stack_repository[craters_position.indexOf(index)].suite.push(str);
                second_stack_repository[craters_position.indexOf(index)].suite.push(str);
            }
        });
    });
    fs.readFile("instructions.txt", function (err, res) {
        if (err)
            throw err;
        //first question output
        console.log("first string :", CrateMover9000(res.toString().split("\n")));
        //second question output
        console.log("second question :", CrateMover9001(res.toString().split("\n")));
    });
});
