const express = require("express");
const { body } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.post(
  "/create",
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["moto", "auto", "car"])
    .withMessage("Invalid vehicle type"),
  authMiddleware.authUser,
  rideController.createRide
);

module.exports = router;
