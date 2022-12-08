"use strict";
exports.__esModule = true;
var fs = require("fs");
var count = 0;
var count2Point = 0;
function isNumeric(val) {
    return /^-?\d+$/.test(val);
}
var repos = [];
var temp = [];
var get_point = function (str) {
    var data = str.split(" ")[0];
    if (isNumeric(data))
        return Number(data);
    return 0;
};
fs.readFile("inputs.txt", function (err, res) {
    if (err)
        throw err;
    var data = res.toString().split("\n");
    data.map(function (str, index) {
        if (str.indexOf("$ cd ") > -1) {
            if (str.split(" ")[2] == "..") {
                repos.push(temp[0]);
                temp[1].size += temp[0].size;
                count2Point += 1;
                temp.splice(0, 1);
                return;
            }
            else {
                temp.unshift({
                    name: str,
                    size: 0
                });
                return;
            }
        }
        else if (index == data.length - 1) {
            temp[0].size += get_point(str);
            temp.map(function (item) {
                repos.push(item);
            });
            return;
        }
        else {
            temp[0].size += get_point(str);
            return;
        }
    });
    repos.map(function (item) {
        if (item.size <= 100000)
            count += item.size;
    });
    console.log(count);
    console.log(count2Point);
});
