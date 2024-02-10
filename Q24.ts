/*More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:
• Tests for equality and inequality with strings• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let myName: string = "AHMAD";
console.log(myName);
console.log("Is My Name is in UpperCase? I predict True.");
console.log(myName == "AHMAD");
console.log("Is My Name is in LowerCase? I predict False.");
console.log(myName == "ahmad");
let agee = 29;
console.log("Age = " + agee);
console.log("Is age <= 29? I predict True.");
console.log(agee <= 29);
console.log("Is age > 29? I predict False.");
console.log(agee > 29);

let array: any[] = [];
console.log(array);
console.log("Is Array Empty? I predict True.");
console.log(array.length == 0);
console.log("Is Array Not Empty? I predict False.");
console.log(array.length > 0);
