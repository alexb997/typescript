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

    updateProduct(id: number, name: string, price: number, quantity: number): Product | null {
        const product = this.products.find(p => p.id === id);
        if (!product) return null;
        
        product.name = name;
        product.price = price;
        product.quantity = quantity;
        
        return product;
    }
}

export default new ProductService();
