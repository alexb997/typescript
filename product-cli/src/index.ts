import readlineSync from "readline-sync";
import ProductManager from "./productManager.js";
import chalk from "chalk";

const manager = new ProductManager();

function mainMenu() {
    while (true) {
        console.log(chalk.magenta("\nProduct Management CLI"));
        console.log("1. Add Product");
        console.log("2. List Products");
        console.log("3. Remove Product");
        console.log("4. Exit");

        const choice = readlineSync.questionInt(chalk.yellow("\nEnter choice: "));

        switch (choice) {
            case 1:
                const name = readlineSync.question("Enter product name: ");
                const price = readlineSync.questionFloat("Enter product price: ");
                const quantity = readlineSync.questionInt("Enter product quantity: ");
                manager.addProduct(name, price, quantity);
                break;
            case 2:
                manager.listProducts();
                break;
            case 3:
                const id = readlineSync.questionInt("Enter product ID to remove: ");
                manager.removeProduct(id);
                break;
            case 4:
                console.log(chalk.green("Exiting..."));
                process.exit();
            default:
                console.log(chalk.red("Invalid choice, try again."));
        }
    }
}

mainMenu();
