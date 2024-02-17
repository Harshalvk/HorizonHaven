import { Router } from "express";

import { signUp, test } from "../controller/user.controller";

const route = Router();

route.get("/test", test);
route.post('/signup', signUp)

export default route;
