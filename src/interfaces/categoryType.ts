import { Document } from "mongoose";

interface CategoryType extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default CategoryType;
