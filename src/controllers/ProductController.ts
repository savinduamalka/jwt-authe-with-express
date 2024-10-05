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

export const updateProduct = async (req: Request, res: Response) => {
  const name = req.body.name;
  const updateData = req.body.updateData; // Assuming the updated data is in updateData property

  try {
    const product = await ProductModel.findOne({ name: name });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    Object.assign(product, updateData); 
    await product.save(); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    const product = await ProductModel.findOne({ name: name });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await ProductModel.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
}
