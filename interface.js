var person = {
    name: "Alice",
    age: 25,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    }
};
var point = { x: 10, y: 20 };
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
var requestStatus = "success";
console.log(person.greet());
console.log(point);
console.log(favoriteColor);
console.log(requestStatus);
