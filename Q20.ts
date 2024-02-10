/*Think of something you could store in a array. For example, you could make a list
of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a
program that creates a list containing these items.*/

let Countries: string[] = [
  "Pakistan",
  "Japan",
  "France",
  "Germany",
  "Italy",
  "UAE",
];
console.log("List of countries:");
Countries.forEach((element) => {
  console.log(element);
});
