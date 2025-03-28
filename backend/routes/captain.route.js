const express = require("express");
const { body } = require("express-validator");

const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 charactors"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 charactors"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 charactors"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 charactors"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be car, motorcycle or auto"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 charactors"),
  ],
  captainController.loginCaptain
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
