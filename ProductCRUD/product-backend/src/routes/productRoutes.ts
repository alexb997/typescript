import express from "express";
import { addProduct, listProducts, removeProduct } from "../controllers/productController";

const router = express.Router();

router.post("/", addProduct);
router.get("/", listProducts);
router.delete("/:id", removeProduct);

export default router;
