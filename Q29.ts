/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your
array. If the fruit is in your array, the if block should print a statement, such as You really
like bananas!*/

let favorite_fruits: string[] = ["Pineapple", "Lychee", "Watermelon"];

for (let i = 0; i < favorite_fruits.length; i++) {
  if (favorite_fruits[i] == "Pineapple") {
    console.log("You really like Pineapple!");
  }
  if (favorite_fruits[i] == "Lychee") {
    console.log("You really like Lychee!");
  }
  if (favorite_fruits[i] == "Watermelon") {
    console.log("You really like Watermelon!");
  }
  if (favorite_fruits[i] == "Apple") {
    console.log("You really like Apple!");
  }
  if (favorite_fruits[i] == "Banana") {
    console.log("You really like Banana!");
  }
}
