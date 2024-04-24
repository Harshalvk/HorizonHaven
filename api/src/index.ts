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
  statusCode: number;
  message: string;
  success: boolean;
};

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 200;
  const message = err.message || "Internal server error";
  const success = err.success || false;
  return res.status(statusCode).json({
    success,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`⚙ Server is listening on http://localhost:${PORT}`);
});
