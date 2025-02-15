class Product {
    constructor(public id: number, public name: string, public price: number) {}

    getDetails(): string {
        return `Product [ID: ${this.id}] - ${this.name}, Price: $${this.price}`;
    }
}

class ElectronicProduct extends Product {
    constructor(id: number, name: string, price: number, public warrantyYears: number) {
        super(id, name, price);
    }

    getDetails(): string {
        return `${super.getDetails()}, Warranty: ${this.warrantyYears} years`;
    }
}

class DataStorage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getItems(): T[] {
        return [...this.items];
    }
}

const laptop = new ElectronicProduct(1, "Laptop", 1200, 2);
const phone = new ElectronicProduct(2, "Smartphone", 800, 1);

const storage = new DataStorage<ElectronicProduct>();
storage.addItem(laptop);
storage.addItem(phone);

console.log(storage.getItems().map(item => item.getDetails()));