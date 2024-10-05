import { Document } from "mongoose";
import CategoryType from "./categoryType";

interface ProductType extends Document{
    name:String;
    price:number;
    description:String;
    category:CategoryType;
    createdAt:Date;
    updatedAt:Date;
}

export default ProductType;