import { Router } from "express";
import {
  signUp,
  test,
  signIn,
  google,
  updateUser,
  deleteUser,
  signOut,
} from "../controller/user.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.get("/test", test);
route.post("/signup", signUp);
route.post("/signin", signIn);
route.post("/google", google);
route.post("/update/:id", verifyToken, updateUser);
route.delete("/delete/:id", verifyToken, deleteUser);
route.get('/signout', signOut)

export default route;
