import { Router } from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controller/listing.controller";
import { verifyToken } from "../utils/verifyUser";

const route = Router();

route.post("/create", verifyToken, createListing);
route.delete("/delete/:id", verifyToken, deleteListing);
route.post("/update/:id", verifyToken, updateListing);
route.get("/get/:id", getListing);
route.get("/get", getListings);

export default route;
