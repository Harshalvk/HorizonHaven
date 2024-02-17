import express, { Request, Response } from "express";
import connectDB from "./db";
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();

import userRouter from './routes/user.routes'

const app = express();
const PORT = process.env.PORT;

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log(`⚙ Server is listening on http://localhost:${PORT}`);
});
