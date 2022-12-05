"use strict";
exports.__esModule = true;
var fs = require("fs");
var stacks = [];
var secStacks = [];
var position = [];
var topCrate = "";
var topCrate2 = "";
function CrateMover9001(arr) {
    arr.map(function (data) {
        var move = data.split(" ");
        for (var i = parseInt(move[1]) - 1; i >= 0; i--) {
            secStacks[parseInt(move[5]) - 1].suite.unshift(secStacks[parseInt(move[3]) - 1].suite[i]);
        }
        secStacks[parseInt(move[3]) - 1].suite.splice(0, parseInt(move[1]));
    });
    secStacks.map(function (data) {
        topCrate2 += data.suite[0];
    });
    console.log("second string :", topCrate2);
    return "";
}
fs.readFile("inputs.txt", function (err, data) {
    if (err)
        throw err;
    var res = data.toString().split("\n");
    var myStr = res[res.length - 1];
    myStr.split("").map(function (data, index) {
        if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90)
            position.push(index);
    });
    position.map(function (index) {
        stacks.push({
            index: index,
            suite: []
        });
        secStacks.push({
            index: index,
            suite: []
        });
    });
    res.map(function (data) {
        data.split("").map(function (str, index) {
            if (position.indexOf(index) > -1 && str !== " ") {
                stacks[position.indexOf(index)].suite.push(str);
                secStacks[position.indexOf(index)].suite.push(str);
            }
        });
    });
    fs.readFile("range.txt", function (err, res) {
        if (err)
            throw err;
        CrateMover9001(res.toString().split("\n"));
        res
            .toString()
            .split("\n")
            .map(function (data) {
            var move = data.split(" ");
            for (var i = 0; i < parseInt(move[1]); i++) {
                stacks[parseInt(move[5]) - 1].suite.unshift(stacks[parseInt(move[3]) - 1].suite[i]);
            }
            stacks[parseInt(move[3]) - 1].suite.splice(0, parseInt(move[1]));
        });
        stacks.map(function (data) {
            topCrate += data.suite[0];
        });
        console.log("first string :", topCrate);
    });
});
