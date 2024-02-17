import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB()

app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "Hello" }).status(200);
});

app.listen(PORT, () => {
  console.log(`⚙ Server is listening on http://localhost:${PORT}`);
});
