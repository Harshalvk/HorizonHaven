import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler";
import jwt from 'jsonwebtoken'

export const test = (req: Request, res: Response) => {
  res.send({ msg: "Test route" });
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  console.log(password);
  const findUser = await User.findOne({ email });
  if (!findUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.send("User created successfully").status(201);
  } else {
    next(errorHandler(500, "User already exists"));
  }
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: pass, ...rest} = validUser._doc
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest)
  } catch (error) {
    next(error);
  }
};
