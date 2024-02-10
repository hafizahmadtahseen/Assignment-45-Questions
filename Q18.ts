/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.*/
let liketovisits = ["Saudia", "Dubai", "Switzerland", "Greece", "Thailand"];
// • Print your array in its original order.
console.log("\n Original Order");
console.log(liketovisits);
// • Print your array in alphabetical order without modifying the actual list.
console.log("\n alphabetical order without modifying the actual list:");
console.log([...liketovisits].sort());
// • Show that array is in its original order.
console.log("\n Original Order");
console.log(liketovisits);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse alphabatical order without modifying the actual list:");
console.log([...liketovisits].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("\n Original Order");
console.log(liketovisits);
// • Reverse the order of your list. Print the array to show that its order has changed.
liketovisits.reverse();
console.log("\n its order has changed.");
console.log(liketovisits);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
liketovisits.reverse();
console.log("\n it’s back to its original order.");
console.log(liketovisits);
// • Sort your array so it’s stored in alphabetical order.
liketovisits.sort();
// Print the array to show that its order has been changed.
console.log("\n its order has been changed to alphabatical.");
console.log(liketovisits);
// • Sort to change your array so it’s stored in reverse alphabetical order.
liketovisits.reverse();
// Print the list to show that its order has changed.
console.log("\n its order has been changed to reverse alphabitical.");
console.log(liketovisits);
