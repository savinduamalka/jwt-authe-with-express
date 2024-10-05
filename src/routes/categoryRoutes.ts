import express from 'express';
import * as CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.post("/categories", CategoryController.createCategory);
router.get("/categories", CategoryController.getCategories);
router.put("/categories", CategoryController.updateCategory);
router.delete("/categories", CategoryController.deleteCategory);

export default router;