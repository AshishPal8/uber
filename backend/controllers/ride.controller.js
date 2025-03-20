const { validationResult } = require("express-validator");
const rideService = require("../services/ride.service");
const mapService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model");

module.exports.createRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.user._id;
  const { pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      user: userId,
      pickup,
      destination,
      vehicleType,
    });

    res.status(201).json({ data: ride });

    const pickupCordinates = await mapService.getAddressCordinate(pickup);

    const captainInRadius = await mapService.getCaptainInTheRadius(
      pickupCordinates.ltd,
      pickupCordinates.lng,
      5000
    );

    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");

    captainInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketid, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getFare = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await rideService.getFare(pickup, destination);

    res.status(200).json(fare);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.confirmRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
    const ride = await rideService.confirmRide({
      rideId,
      captain: req.captain,
    });
    sendMessageToSocketId(ride.user.socketid, {
      event: ride - confirmed,
      data: ride,
    });

    return res.status(200).json(ride);
  } catch (error) {}
};
