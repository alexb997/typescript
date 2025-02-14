console.log("Inventory system is ready!");

import Inventory from "./inventory";

const myInventory = new Inventory();

myInventory.addProduct({ id: 1, name: "Laptop", price: 999, quantity: 5 });
myInventory.addProduct({ id: 2, name: "Mouse", price: 25, quantity: 10 });
myInventory.addProduct({ id: 3, name: "Keyboard", price: 50, quantity: 7 });

myInventory.updateProductQuantity(2, 15);

const foundProduct = myInventory.searchProduct("Mouse");
console.log(foundProduct ? `Found: ${foundProduct.name}, Price: ${foundProduct.price}, Quantity: ${foundProduct.quantity}` : "Product not found");

console.log("Total Inventory Value: $", myInventory.calculateTotalValue());

myInventory.sortProducts("price");
myInventory.listProducts();

myInventory.removeProduct(1);
myInventory.listProducts();