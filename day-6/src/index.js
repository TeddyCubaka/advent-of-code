"use strict";
exports.__esModule = true;
var fs = require("fs");
var _ = require("lodash");
fs.readFile("inputs.txt", function (err, res) {
    if (err)
        throw err;
    var arr = res.toString().split("");
    var i = 0;
    while (i >= 0) {
        var temp = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]];
        var unique = _.uniq(temp);
        if (unique.length === 4)
            console.log("first question :", i + 4);
        if (unique.length === 4)
            break;
        i++;
    }
    var a = 0;
    while (a >= 0) {
        var temp = [];
        for (var i_1 = a; i_1 < 14 + a; i_1++) {
            temp.push(arr[i_1]);
        }
        var unique = _.uniq(temp);
        if (unique.length === 14) {
            console.log("second question :", a + 14);
        }
        if (unique.length === 14)
            break;
        a++;
    }
});
