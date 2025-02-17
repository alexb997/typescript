import express from "express";
import { addProduct, listProducts, removeProduct, updateProduct } from "../controllers/productController";

const router = express.Router();

router.post("/", addProduct);
router.get("/", listProducts);
router.delete("/:id", removeProduct);
router.put("/:id", updateProduct);


export default router;
