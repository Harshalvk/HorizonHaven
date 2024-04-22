import { Router } from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing
} from "../controller/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.post("/create", verifyToken, createListing);
route.delete("/delete/:id", verifyToken, deleteListing);
route.post("/update/:id", verifyToken, updateListing);
route.get("/get/:id", getListing);

export default route;
