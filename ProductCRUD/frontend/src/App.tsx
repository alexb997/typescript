import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
    return (
        <div>
            <h1>Inventory System</h1>
            <ProductForm onAdd={() => window.location.reload()} />
            <ProductList />
        </div>
    );
};

export default App;
