import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../services/productService";

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleRemove = async (id: number) => {
        await removeProduct(id);
        fetchProducts();
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        {p.name} - ${p.price} (Qty: {p.quantity}) 
                        <button onClick={() => handleRemove(p.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
