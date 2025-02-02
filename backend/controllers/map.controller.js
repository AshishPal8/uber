const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;

  try {
    const coordinates = await mapService.getAddressCordinate(address);

    res.status(200).json({ data: coordinates });
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found!" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination } = req.query;

  try {
    const distanceTime = await mapService.getDistanceTime(origin, destination);

    res.status(200).json({ data: distanceTime });
  } catch (error) {
    res.status(404).json({ message: "Distance and time not found!" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { input } = req.query;
    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    res.status(200).json({ data: suggestions });
  } catch (error) {
    res.status(404).json({ message: "Suggestions not found!" });
  }
};
