import Express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updataHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = Express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATA
router.put("/:id", verifyAdmin,   updataHotels);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;
