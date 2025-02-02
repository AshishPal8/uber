const { validationResult } = require("express-validator");
const rideService = require("../services/ride.service");

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
