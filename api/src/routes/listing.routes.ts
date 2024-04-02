import { Router } from "express";
import { createListing, deleteListing } from "../controller/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.post("/create", verifyToken, createListing);
route.delete("/delete/:id", verifyToken, deleteListing);

export default route;
