import { Router } from "express";

import { signUp, test, signIn, google } from "../controller/user.controller";

const route = Router();

route.get("/test", test);
route.post('/signup', signUp)
route.post('/signin', signIn)
route.post('/google', google)

export default route;
