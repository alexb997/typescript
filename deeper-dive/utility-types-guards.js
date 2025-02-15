var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var readonlyUser = {
    id: 1,
    name: "alex",
    email: "alex@example.com"
};
// readonlyUser.name = "Bob"; //Cannot assign to 'name' because it is a read-only property.
function isString(value) {
    return typeof value === "string";
}
function formatInput(input) {
    if (isString(input)) {
        return "String: ".concat(input.toUpperCase());
    }
    else {
        return "Number: ".concat(input.toFixed(2));
    }
}
var user = { id: 1, name: "Alex", email: "alex@example.com" };
console.log(updateUser(user, { email: "jack@example.com" }));
console.log(formatInput("hello"));
console.log(formatInput(42.5678));
