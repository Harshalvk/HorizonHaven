import { Router } from "express";

import { signUp, test, signIn, google, updateUser } from "../controller/user.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.get("/test", test);
route.post("/signup", signUp);
route.post("/signin", signIn);
route.post("/google", google);
route.post("/update/:id", verifyToken, updateUser);

export default route;
