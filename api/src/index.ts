import express, { Request, Response, Errback, NextFunction } from "express";
import connectDB from "./db";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

type Error = {
  statusCode: number | 500,
  message: string | 'Internal server error'
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode
  const message = err.message 
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
});

app.listen(PORT, () => {
  console.log(`⚙ Server is listening on http://localhost:${PORT}`);
});
