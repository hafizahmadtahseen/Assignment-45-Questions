// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re
// still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program

let newguestlist: string[] = [
  "Haroon",
  "Ahmad",
  "Ali",
  "Zaroon",
  "Munna",
  "Farhan",
  "Junaid",
];
// • Start with your program from Exercise 16. Add a new line that prints a message saying
// that you can invite only two people for dinner.
console.log("Sorry Boys, I can invite only two persons for dinner!");
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner.
for (let i = 0; i < 5; i++) {
  let x = newguestlist.pop();

  console.log(`Hey ${x}! I am sorry I can’t invite you to dinner.`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
newguestlist.forEach((i) => {
  console.log(`Dear ${i}! You are still Invited.`);
});
// • Remove the last two names from your list, so you have an empty list.
for (let i = 0; i <= newguestlist.length; i++) {
  let x = newguestlist.pop();
}
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(newguestlist);
export {};
