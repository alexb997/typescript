import { Request, Response, RequestHandler } from "express";
import productService from "../services/productService";

export const addProduct: RequestHandler = (req, res): void => {
    const { name, price, quantity } = req.body;
    if (!name || price == null || quantity == null) {
        res.status(400).json({ message: "Invalid product data" });
        return;
    }
    const product = productService.addProduct(name, price, quantity);
    res.status(201).json(product);
};

export const listProducts: RequestHandler = (req, res): void => {
    res.json(productService.listProducts());
};

export const removeProduct: RequestHandler = (req, res): void => {
    const { id } = req.params;
    const removed = productService.removeProduct(parseInt(id));
    if (removed) {
        res.json({ message: "Product removed" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const updateProduct: RequestHandler = (req, res): void => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    if (!name || price == null || quantity == null) {
        res.status(400).json({ message: "Invalid product data" });
        return;
    }

    const updatedProduct = productService.updateProduct(parseInt(id), name, price, quantity);
    if (!updatedProduct) {
        res.status(404).json({ message: "Product not found" });
    } else {
        res.json(updatedProduct);
    }
};