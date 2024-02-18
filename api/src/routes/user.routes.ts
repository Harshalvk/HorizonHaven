import { Router } from "express";

import { signUp, test, signIn } from "../controller/user.controller";

const route = Router();

route.get("/test", test);
route.post('/signup', signUp)
route.post('/signin', signIn)

export default route;
