/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
with the default message, and a shirt of any size with a different message.*/
var Def_make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
};
Def_make_shirt();
Def_make_shirt("small", "I love Football");
Def_make_shirt("medium");
