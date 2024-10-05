import express from 'express';
import AuthController from '../controllers/AutheController';
import exp from 'constants';

const router=express.Router();

router.get("/login",AuthController);

export default router;