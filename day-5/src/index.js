"use strict";
exports.__esModule = true;
var fs = require("fs");
var stacks = [];
var position = [];
var topCrate = "";
fs.readFile("inputs.txt", function (err, data) {
    if (err)
        throw err;
    var res = data.toString().split("\n");
    var myStr = res[res.length - 1];
    myStr.split("").map(function (data, index) {
        if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90)
            position.push(index);
    });
    position
        .sort(function (a, b) { return a - b; })
        .map(function (index) {
        stacks.push({
            index: index,
            suite: []
        });
    });
    res.map(function (data, id) {
        data.split("").map(function (str, index) {
            if (position.indexOf(index) > -1 && str !== " ")
                stacks[position.indexOf(index)].suite.push(str);
        });
    });
    fs.readFile("range.txt", function (err, res) {
        if (err)
            throw err;
        res
            .toString()
            .split("\n")
            .map(function (data) {
            var move = data.split(" ");
            var i1 = parseInt(move[1]);
            var i2 = parseInt(move[3]) - 1;
            var i3 = parseInt(move[5]) - 1;
            var s1 = stacks[i2].suite;
            var s2 = stacks[i3].suite;
            for (var i = 0; i < i1; i++) {
                s2.unshift(s1[i]);
            }
            s1.splice(0, i1);
        });
        stacks.map(function (data) {
            topCrate += data.suite[0];
        });
        console.log(topCrate);
    });
});
