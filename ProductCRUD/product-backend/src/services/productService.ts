import { Product } from "../models/product";

class ProductService {
    private products: Product[] = [];
    private nextId = 1;

    addProduct(name: string, price: number, quantity: number): Product {
        const product: Product = { id: this.nextId++, name, price, quantity };
        this.products.push(product);
        return product;
    }

    listProducts(): Product[] {
        return this.products;
    }

    removeProduct(id: number): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default new ProductService();
