let alien_color: string = "green";
console.log("The Color of Alien is: " + alien_color);
if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien!");
  alien_color = "yellow";
}
if (alien_color === "yellow") {
  console.log("The Color of Alien is: " + alien_color);
  console.log("You just earned 10 points for shooting the alien!");
  alien_color = "red";
}
if (alien_color === "red") {
  console.log("The Color of Alien is: " + alien_color);
  console.log("You just earned 15 points for shooting the alien!");
}
export {};
