import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

// GET
router.get("/:id", getHotel);

export default router;
