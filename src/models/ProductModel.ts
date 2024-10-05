import mongoose, { Schema } from "mongoose";
import ProductType from "../interfaces/ProductType";


const ProductSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category', //refers to the Category model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const ProductModel = mongoose.model<ProductType>('Product', ProductSchema);

export default ProductModel; //similar to entity in SpringBoot