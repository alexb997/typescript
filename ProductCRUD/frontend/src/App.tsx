import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import { Product } from "./types/product";

const App = () => {
    const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

    return (
        <div>
            <h1>Inventory System</h1>
            <ProductForm onSave={() => window.location.reload()} editingProduct={editingProduct} />
            <ProductList onEdit={setEditingProduct} />
        </div>
    );
};

export default App;

