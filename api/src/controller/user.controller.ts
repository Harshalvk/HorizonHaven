import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcryptjs'

export const test = (req: Request, res: Response) => {
  res.send({ msg: "Test route" });
};

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const findUser = await User.findOne({email})
  if(!findUser){
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({username, email, password: hashedPassword})
    await newUser.save()
    res.send("User created successfully").status(201)
  }
};
