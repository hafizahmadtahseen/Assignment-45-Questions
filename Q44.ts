/*Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time.*/

function sandwich_items(...items: string[]) {
  console.log("Your Sandwich Includes:");
  if (items.length == 0) {
    console.log("Your Sandwich is empty! Add some Items to your Sandwich");
    console.log("\n");
  } else {
    for (let i of items) {
      console.log(`${i}`);
    }
    console.log("\n");
  }
}
sandwich_items();
sandwich_items("Cheeese", "Ketchup");
sandwich_items("BBQ", "Garlic", "Onion");
