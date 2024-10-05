import express from 'express';
import * as CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.post("/categories", CategoryController.createCategory);
router.get("/categories", CategoryController.getCategories);

export default router;