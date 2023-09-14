import Express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updataHotels,
} from "../controllers/hotel.js";
const router = Express.Router();

//CREATE
router.post("/", createHotel);

//UPDATA
router.put("/:id", updataHotels);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;
