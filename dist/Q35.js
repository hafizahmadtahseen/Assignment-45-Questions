/*Animals: Think of at least three different animals that have a common
characteristic. Store the names of these animals in a list, and then use a for loop to
print out the name of each animal. • Modify your program to print a statement
about each animal, such as A dog would make a great pet. • Add a line at the end
of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!*/
var Animals = ["Lion", "Tiger", "Cat"];
console.log("List of Animals:");
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var n = Animals_1[_i];
    console.log(n);
}
console.log("\n");
for (var _a = 0, Animals_2 = Animals; _a < Animals_2.length; _a++) {
    var n = Animals_2[_a];
    if (n == "Lion") {
        console.log("".concat(n, " is a King of Jungle "));
    }
    else if (n == "Tiger") {
        console.log("".concat(n, " is an Enemy of Lion "));
    }
    else if (n == "Cat") {
        console.log("".concat(n, " is a cute Pet "));
    }
}
console.log("\n \nCommon Characteristics: All these animals are great hunters");
