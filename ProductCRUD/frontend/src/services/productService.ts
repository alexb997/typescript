import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const getProducts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addProduct = async (name: string, price: number, quantity: number) => {
    const res = await axios.post(API_URL, { name, price, quantity });
    return res.data;
};

export const removeProduct = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
