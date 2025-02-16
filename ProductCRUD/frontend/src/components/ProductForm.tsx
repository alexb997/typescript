import { useState } from "react";
import { addProduct } from "../services/productService";

const ProductForm = ({ onAdd }: { onAdd: () => void }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addProduct(name, parseFloat(price), parseInt(quantity));
        setName("");
        setPrice("");
        setQuantity("");
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" required />
            <input value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" type="number" required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
