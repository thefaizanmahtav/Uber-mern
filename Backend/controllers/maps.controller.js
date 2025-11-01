import { getAddressCoordinate, getDistanceTimeService, getSuggestionService } from "../services/maps.service.js";
import { validationResult } from "express-validator";


export const getCoordinates = async (req, res, next) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const { address } = req.query;

  try {
    const coordinates = await getAddressCoordinate(address)
    res.status(200).json(coordinates)
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found" })
  }
}



export const getDistanceTimeController = async (req, res) => {
  try {
    const { origin, destination } = req.query;

    if (!origin || !destination) {
      return res.status(400).json({
        success: false,
        message: "Origin and destination are required",
      });
    }

    // Fetch coordinates for both origin and destination
    const originCoords = await getAddressCoordinate(origin);
    const destinationCoords = await getAddressCoordinate(destination);

    console.log("Origin coords:", originCoords);
    console.log("Destination coords:", destinationCoords);

    // Validate that coordinates were returned
    if (!originCoords?.lat || !originCoords?.lng || !destinationCoords?.lat || !destinationCoords?.lng) {
      return res.status(404).json({
        success: false,
        message: "Could not fetch valid coordinates for origin or destination",
      });
    }

    // Fetch distance and duration
    const result = await getDistanceTimeService(originCoords, destinationCoords);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("❌ Error in getDistanceTimeController:", error);
    res.status(500).json({
      success: false,
      message: error.message,
      error: error.response?.data || null,
    });
  }
};

export const getSuggestionController = async (req, res) => {
  const { input } = req.query;

   if (!input) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

  try {

    const suggestions = await getSuggestionService(input);
    res.status(200).json({
      success: true,
      data: suggestions,
    });

  } catch (error) {
    console.error("❌ Error in getSuggestionController:", error);
    res.status(500).json({
      success: false,
      message: error.message,
      error: error.response?.data || null,
    });
  }
};
