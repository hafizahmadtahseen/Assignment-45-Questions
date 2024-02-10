/*Animals: Think of at least three different animals that have a common
characteristic. Store the names of these animals in a list, and then use a for loop to
print out the name of each animal. • Modify your program to print a statement
about each animal, such as A dog would make a great pet. • Add a line at the end
of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!*/

let Animals: string[] = ["Lion", "Tiger", "Cat"];
console.log(`List of Animals:`);
for (let n of Animals) {
  console.log(n);
}
console.log("\n");
for (let n of Animals) {
  if (n == "Lion") {
    console.log(`${n} is a King of Jungle `);
  } else if (n == "Tiger") {
    console.log(`${n} is an Enemy of Lion `);
  } else if (n == "Cat") {
    console.log(`${n} is a cute Pet `);
  }
}
console.log(`\n 
Common Characteristics: All these animals are great hunters`);
