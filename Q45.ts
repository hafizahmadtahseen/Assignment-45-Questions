/*Cars: Write a function that stores information about a car in a Object. The function
should always receive a manufacturer and a model name. It should then accept an
arbitrary number of keyword arguments. Call the function with the required
information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored
correctly*/
function Mycar(
  manufacturer: string,
  model_name: string,
  ...Properties: [string, any][]
) {
  const mycar: any = { manufacturer, model_name };
  for (const [key, value] of Properties) {
    mycar[key] = value;
  }
  return mycar;
}
let x = Mycar("Toyota", "Prius", ["Color", "Black"], ["Top Speed", 250]);
console.log(x);
