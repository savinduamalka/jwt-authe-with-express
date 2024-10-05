import express, { Request, Response } from 'express';
import * as ProductController from '../controllers/ProductController'

const router = express.Router();

router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.getProducts);
router.put("/products", ProductController.updateProduct);
router.delete("/products", ProductController.deleteProduct);

export default router;