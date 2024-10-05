import express, { Request, Response } from 'express';
import ProductModel from '../models/ProductModel';


export const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  try {
    const product = new ProductModel(productData);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};
