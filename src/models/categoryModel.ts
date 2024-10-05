import mongoose, { Schema, model } from "mongoose";
import CategoryType from "../interfaces/categoryType";


const categorySchema = new Schema<CategoryType>({
  name: {
    type: String,
    required: true,
    trim: true, // remove whitespaces at the end
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const categoryModel=mongoose.model<CategoryType>("Category", categorySchema);

export default categoryModel;//similar to entity in SpringBoot
