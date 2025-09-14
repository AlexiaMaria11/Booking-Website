import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(savedRoom);
  } catch (err) {
    next(createError(500, "Failed to create room"));
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateAvailability = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body.dates);
  try {
    await Room.updateOne(
      {
        "roomNumbers._id": id,
      },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("dates updated successfully");
  } catch (err) {
    next(err);
  }
};

export const available = async (req, res, next) => {
  res.json({ message: "love" });
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      return next(err);
    }

    res.status(200).json("Room deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
