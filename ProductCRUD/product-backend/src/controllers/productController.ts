import { Request, Response } from "express";
import productService from "../services/productService";

export const addProduct = (req: Request, res: Response) => {
    const { name, price, quantity } = req.body;
    if (!name || price == null || quantity == null) {
        return res.status(400).json({ message: "Invalid product data" });
    }
    const product = productService.addProduct(name, price, quantity);
    res.status(201).json(product);
};

export const listProducts = (req: Request, res: Response) => {
    res.json(productService.listProducts());
};

export const removeProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const removed = productService.removeProduct(parseInt(id));
    removed ? res.json({ message: "Product removed" }) : res.status(404).json({ message: "Product not found" });
};
