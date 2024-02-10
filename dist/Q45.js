/*Cars: Write a function that stores information about a car in a Object. The function
should always receive a manufacturer and a model name. It should then accept an
arbitrary number of keyword arguments. Call the function with the required
information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored
correctly*/
function Mycar(manufacturer, model_name) {
    var Properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Properties[_i - 2] = arguments[_i];
    }
    var mycar = { manufacturer: manufacturer, model_name: model_name };
    for (var _a = 0, Properties_1 = Properties; _a < Properties_1.length; _a++) {
        var _b = Properties_1[_a], key = _b[0], value = _b[1];
        mycar[key] = value;
    }
    return mycar;
}
var x = Mycar("Toyota", "Prius", ["Color", "Black"], ["Top Speed", 250]);
console.log(x);
