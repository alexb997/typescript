import { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../services/productService";
import { Product } from "../types/product";

const ProductForm = ({ onSave, editingProduct }: { onSave: () => void; editingProduct?: Product }) => {
    const [name, setName] = useState(editingProduct?.name || "");
    const [price, setPrice] = useState(editingProduct?.price.toString() || "");
    const [quantity, setQuantity] = useState(editingProduct?.quantity.toString() || "");

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price.toString());
            setQuantity(editingProduct.quantity.toString());
        }
    }, [editingProduct]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            await updateProduct(editingProduct.id, name, parseFloat(price), parseInt(quantity));
        } else {
            await addProduct(name, parseFloat(price), parseInt(quantity));
        }
        setName("");
        setPrice("");
        setQuantity("");
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" required />
            <input value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" type="number" required />
            <button type="submit">{editingProduct ? "Update" : "Add"} Product</button>
        </form>
    );
};


export default ProductForm;
