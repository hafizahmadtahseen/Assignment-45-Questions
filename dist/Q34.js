/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names
in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of
printing just the name of the pizza. For each pizza you should have one line of output
containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you
like pizza. The output should consist of three or more lines about the kinds of pizza you
like and then an additional sentence, such as I really love pizza!*/
var myPizza = ["PeriPeri", "BBQ", "ChickenTikka"];
console.log("My Favourite Pizzas are:");
for (var _i = 0, myPizza_1 = myPizza; _i < myPizza_1.length; _i++) {
    var x = myPizza_1[_i];
    console.log(x);
}
console.log("\n");
for (var _a = 0, myPizza_2 = myPizza; _a < myPizza_2.length; _a++) {
    var x = myPizza_2[_a];
    console.log("I like ".concat(x, " pizza"));
}
console.log("\n PeriPeri is my favorite because of its Picker flavor. I don't really love pizza but sometimes it is good.");
