import UserModel from "../models/UserModel";
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
  const {username,password, firstname, lastname, email} = req.body;

  if(!username || !password || !firstname || !lastname || !email){
    return res.status(400).json({message: 'All fields are required'});
  }
  const existingUser= await UserModel.findOne({username: username});
  if(existingUser){
    return res.status(400).json({message: 'User already exists'});
  }
  try {
    const user = new UserModel();
    user.username = username;
    user.password = await bcrypt.hash(password, 10);//decode password
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: (error as Error).message });
  }
}

export const getUsers = async (req: Request, res: Response) => {
    const email=req.body.email;
  try {
    const users = await UserModel.find({ email: email });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: (error as Error).message });
  }
}

