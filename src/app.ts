import express, { Application, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import categoryRoutes from './routes/categoryRoutes';
import router from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import AutheRoutes from './routes/AutheRoutes';
import { authMiddleware } from './middleware/AutheMiddleware';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});


app.use("/api",AutheRoutes);

app.use(authMiddleware);

app.use("/api",categoryRoutes);
app.use("/api",router);
app.use("/api",userRoutes);


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});