import chalk from "chalk";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

class ProductManager {
    private products: Product[] = [];
    private nextId: number = 1;

    addProduct(name: string, price: number, quantity: number): void {
        const product: Product = { id: this.nextId++, name, price, quantity };
        this.products.push(product);
        console.log(chalk.green(`Product "${name}" added successfully!`));
    }

    listProducts(): void {
        if (this.products.length === 0) {
            console.log(chalk.yellow("No products available."));
            return;
        }
        console.log(chalk.blue("\nProduct List:"));
        this.products.forEach(p => 
            console.log(chalk.cyan(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}, Quantity: ${p.quantity}`))
        );
    }

    removeProduct(id: number): void {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.log(chalk.red(`Product with ID ${id} not found.`));
            return;
        }
        this.products.splice(index, 1);
        console.log(chalk.green(`Product with ID ${id} removed.`));
    }
}

export default ProductManager;
