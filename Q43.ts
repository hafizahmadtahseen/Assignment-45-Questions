/*Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

let magic_names: string[] = ["Dum", "Pum", "Chum"];

function show_magicians(x: string[]) {
  x.forEach((element) => {
    console.log(element);
  });
}
function make_great(x: string[]) {
  const y = x.map((nameee) => `The Graet ${nameee}`);
  return y;
}
let great_magic_names: string[] = make_great(magic_names);
show_magicians(great_magic_names);
export {};
