/*Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the
program.*/
var Countriess = [
    "Pakistan",
    "Japan",
    "France",
    "Germany",
    "Italy",
    "UAE",
];
console.log("List of countries:");
var index = Countriess[7];
console.log("Index Error (Element at Position 7 is) ".concat(index));
Countriess.forEach(function (element) {
    console.log(element);
});
