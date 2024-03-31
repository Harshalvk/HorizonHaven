import express, { Request, Response, NextFunction } from "express";
import connectDB from "./db";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
import listingRouter from "./routes/listing.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);

type Error = {
  statusCode: number | 500;
  message: string | "Internal server error";
  success: boolean | false;
};

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode;
  const message = err.message;
  const success = err.success;
  return res.status(statusCode).json({
    success,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`⚙ Server is listening on http://localhost:${PORT}`);
});
