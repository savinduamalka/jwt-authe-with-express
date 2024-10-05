import e, { Request, Response } from "express";
import categoryModel from "../models/categoryModel";


export const createCategory = async (req: Request, res: Response) => {
  const name = req.body.name;

  try {
    const category = new categoryModel();
    category.name = name;
    await category.save();

    return res.status(201).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await categoryModel.find();

  return res.status(200).json(categories);
};

export const updateCategory = async (req: Request, res: Response) => {
  const name = req.body.name;
  const updateData = req.body.updateData;
  try {
    const category = await categoryModel.findOne({ name: name });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    Object.assign(category, updateData); 
    await category.save();
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }     
}

export const deleteCategory = async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    const category = await categoryModel.findOne({ name: name });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await categoryModel.deleteOne({ _id: category._id });
    return res.status(200).json({ message: "Category deleted" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}