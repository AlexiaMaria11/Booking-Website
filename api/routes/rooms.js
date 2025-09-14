import express from "express";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateAvailability,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/available/:id", updateAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export default router;
