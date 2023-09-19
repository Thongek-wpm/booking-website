import Express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updataHotels,
  countByCity,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";

const router = Express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATA
router.put("/:id", verifyAdmin, updataHotels);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countbycity", countByCity);

export default router;
