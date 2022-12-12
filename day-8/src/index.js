"use strict";
exports.__esModule = true;
var fs = require("fs");
var _ = require("lodash");
var horizontal_view = [];
var vertical_view = [];
var trees_can_be_seen = [];
var data = fs
    .readFileSync("./inputs.txt", {
    encoding: "utf8",
    flag: "r"
})
    .split("\n");
horizontal_view = data.map(function (range) {
    var getRange = range.split("").map(function (tree) {
        return Number(tree);
    });
    return getRange;
});
//get vertical view of the forest
horizontal_view.map(function (range, index) {
    if (index == 0)
        range.map(function (item) { return vertical_view.push([item]); });
    else
        range.map(function (item, place) {
            vertical_view[place].push(item);
        });
});
function get_indexes(array) {
    var taller = 0;
    var response = array.map(function (data, index) {
        if (index == 0) {
            taller = data;
            return index;
        }
        if (data > taller) {
            taller = data;
            return index;
        }
        if (data <= taller)
            return -8;
        else
            return -8;
    });
    return response.filter(function (data) { return data >= 0; });
}
function get_indexes_inverse(array) {
    var taller = 0;
    var response = array.map(function (data, index) {
        if (index == 0) {
            taller = data;
            return array.length - 1 - index;
        }
        if (data > taller) {
            taller = data;
            return array.length - 1 - index;
        }
        if (data <= taller)
            return -8;
        else
            return -8;
    });
    return response.filter(function (data) { return data >= 0; });
}
var view_from_top = vertical_view.map(function (data) {
    return get_indexes(data);
});
var view_from_bottom = vertical_view.map(function (data) {
    return get_indexes_inverse(data.reverse());
});
var view_from_left = horizontal_view.map(function (data) {
    return get_indexes(data);
});
var view_from_right = horizontal_view.map(function (data) {
    return get_indexes_inverse(data.reverse());
});
var trees_seen_horizontaly = view_from_left.map(function (data, index) {
    var temporal = data.concat(view_from_right[index]);
    return _.uniq(temporal);
});
var trees_seen_verticaly = view_from_top.map(function (data, index) {
    var temporal = data.concat(view_from_bottom[index]);
    return _.uniq(temporal);
});
trees_can_be_seen = trees_seen_horizontaly;
trees_seen_verticaly.map(function (data, index) {
    data.map(function (tree) {
        trees_can_be_seen[tree].push(index);
    });
});
var arr = trees_can_be_seen.map(function (data) { return _.uniq(data); });
var number_of_trees_wich_can_seen = 0;
arr.map(function (data) { return (number_of_trees_wich_can_seen += data.length); });
horizontal_view = horizontal_view.map(function (item) {
    return item.reverse();
});
vertical_view = vertical_view.map(function (item) {
    return item.reverse();
});
var taller_from_right = function (arr, index) {
    if (index == arr.length - 1)
        return 0;
    var stock = [];
    for (var i = index + 1; i < arr.length; i++) {
        if (arr[i] >= arr[index])
            stock.push(i - index);
        if (i == arr.length - 1)
            stock.push(i - index);
    }
    return stock[0];
};
var taller_from_left = function (arr, index) {
    if (index == 0)
        return 0;
    var stock = [];
    for (var i = index - 1; i > -1; i--) {
        if (arr[i] >= arr[index])
            stock.push(index - i);
        if (i == 0)
            stock.push(index - i);
    }
    return stock[0];
};
var scenics_scores = horizontal_view.map(function (range, index) {
    return range.map(function (item, place) {
        return (taller_from_left(range, place) *
            taller_from_right(range, place) *
            taller_from_left(vertical_view[place], index) *
            taller_from_right(vertical_view[place], index));
    });
});
var ideal_score = 0;
scenics_scores.map(function (range) {
    if (Math.max.apply(Math, range) > ideal_score)
        ideal_score = Math.max.apply(Math, range);
});
//first question
console.log(number_of_trees_wich_can_seen);
//second question
console.log(ideal_score);
