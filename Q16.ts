// 16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest
// to the end of your list. • Print a new set of invitation messages, one for each person in
// your list.
let newguestlist = ["Ahmad", "Ali", "Munna", "Farhan"];
console.log(
  "Hurrah, I found a bigger dinner table, so now more space is available!"
);
// • Add one new guest to the beginning of your array.
newguestlist.unshift("Haroon");
// • Add one new guest to the middle of your array.
newguestlist.splice(3, 0, "Zaroon");
// • Add one new guest to the end of your array.
newguestlist.push("Junaid");
// Print a new set of invitation messages, one for each person in your list.
newguestlist.forEach((i) => {
  console.log(`Dear ${i}! Aaj dinner meri trf se`);
});
