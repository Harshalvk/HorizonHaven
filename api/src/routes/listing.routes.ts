import { Router } from "express";
import { createListing } from "../controller/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.post("/create", verifyToken, createListing);

export default route;
