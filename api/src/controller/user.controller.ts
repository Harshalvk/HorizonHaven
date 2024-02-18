import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler";

export const test = (req: Request, res: Response) => {
  res.send({ msg: "Test route" });
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body.formData)
  const { username, email, password } = req.body.formData
  console.log(password)
  const findUser = await User.findOne({ email });
  if (!findUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.send("User created successfully").status(201);
  } else {
    next(errorHandler(500, 'User already exists'))
  }
};
