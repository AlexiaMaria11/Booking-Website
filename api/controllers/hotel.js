import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const { limit, min, max, ...query } = req.query;
    const lim = parseInt(limit) || 40;
    const minPrice = parseInt(min) || 1;
    const maxPrice = parseInt(max) || 999;

    const hotels = await Hotel.find({
      ...query,
      cheapestPrice: { $gte: minPrice, $lte: maxPrice },
    }).limit(lim);

    res.status(200).json(hotels);
  } catch (err) {
    console.error("Error fetching hotels:", err);
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => Hotel.countDocuments({ city }))
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const counts = await Hotel.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
        },
      },
    ]);

    const typeOrder = ["hotel", "apartment", "resort", "villa", "cabin"];

    const countMap = counts.reduce((acc, item) => {
      acc[item._id.toLowerCase()] = item.count;
      return acc;
    }, {});

    const formattedCounts = typeOrder.map((type) => ({
      type: type,
      count: countMap[type] || 0,
    }));

    res.status(200).json(formattedCounts);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const id = req.params.id;
    const hotel = await Hotel.findById(id);
    console.log(id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
