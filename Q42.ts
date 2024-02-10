/*Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the list
has actually been modified.*/

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
