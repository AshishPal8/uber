const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Invalid pickup or destination address");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    moto: 20,
    auto: 30,
    car: 50,
  };

  const perKmRate = {
    moto: 8,
    auto: 10,
    car: 15,
  };

  const perMinuteRate = {
    moto: 1.5,
    auto: 2,
    car: 3,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance.value / 1000) * perKmRate.moto +
        (distanceTime.duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
}

module.exports.getFare = getFare;

function getOpt(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required!");
  }

  const fare = await getFare(pickup, destination);

  const ride = new rideModel({
    user,
    pickup,
    destination,
    otp: getOpt(4),
    fare: fare[vehicleType],
  });

  return ride;
};
