type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`${product.name} added successfully!`);
    }

    removeProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with ID ${id} removed!`);
    }

    listProducts(): void {
        console.log("Inventory:");
        this.products.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`);
        });
    }
    
    updateProductQuantity(id: number, quantity: number): void {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.quantity = quantity;
            console.log(`Updated ${product.name} quantity to ${quantity}`);
        } else {
            console.log(`Product with ID ${id} not found!`);
        }
    }

    searchProduct(name: string): Product | undefined {
        return this.products.find(product => product.name.toLowerCase() === name.toLowerCase());
    }

    calculateTotalValue(): number {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    sortProducts(by: "name" | "price"): void {
        this.products.sort((a, b) => {
            if (by === "name") {
                return a.name.localeCompare(b.name);
            } else {
                return a.price - b.price;
            }
        });
        console.log(`Products sorted by ${by}`);
    }
}

export default Inventory;