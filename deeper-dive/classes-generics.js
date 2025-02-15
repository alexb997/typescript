var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getDetails = function () {
        return "Product [ID: ".concat(this.id, "] - ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct(id, name, price, warrantyYears) {
        var _this = _super.call(this, id, name, price) || this;
        _this.warrantyYears = warrantyYears;
        return _this;
    }
    ElectronicProduct.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Warranty: ").concat(this.warrantyYears, " years");
    };
    return ElectronicProduct;
}(Product));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.items = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    return DataStorage;
}());
var laptop = new ElectronicProduct(1, "Laptop", 1200, 2);
var phone = new ElectronicProduct(2, "Smartphone", 800, 1);
var storage = new DataStorage();
storage.addItem(laptop);
storage.addItem(phone);
console.log(storage.getItems().map(function (item) { return item.getDetails(); }));
