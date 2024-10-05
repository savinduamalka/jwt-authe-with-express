import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import { generateJwt } from '../security/jwt';
import bcrypt from 'bcryptjs';

const login = async (req: Request, res: Response) => {
    const { userInput, password } = req.body;
    try{
        const user= await UserModel.findOne({
            $or: [
                {username: userInput}, 
                {email: userInput}]
            }); 
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }   

        const passwordValid= await bcrypt.compare(password, user.password);//return true or false
        if(!passwordValid){
            return res.status(400).json({message: 'Invalid password' });
        }

        const token = generateJwt(user);

        return res.status(200).json({token});

    }catch(error:any){
        return res.status(500).json({message:error.message});
    }
};

export default login;