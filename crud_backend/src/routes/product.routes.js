import express from "express"
import { addProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.post("/add-product", addProduct)
router.get("/products", getAllProduct)
router.get("/product/:id", getProductById)
router.delete("/product/:id", deleteProduct)
router.put("/product/:id", updateProduct)

export default router