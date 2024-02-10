"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the list
has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
var magic_names = ["Dum", "Pum", "Chum"];
function show_magicians(x) {
    x.forEach(function (element) {
        console.log(element);
    });
}
function make_great(x) {
    var y = x.map(function (nameee) { return "The Graet ".concat(nameee); });
    return y;
}
var great_magic_names = make_great(magic_names);
show_magicians(magic_names);
