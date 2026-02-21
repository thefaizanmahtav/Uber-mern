import { createRide, getFare } from "../services/ride.service.js";
import { validationResult } from "express-validator";

export const rideController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination, vehicleType } = req.body;
    const user = req.user || req.captain; // Get the authenticated user (either user or captain)

    try {
        const ride = await createRide({ userId: user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);
    } catch (error) {
        console.error("Error creating ride:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getFareController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;

    try {
        const fare = await getFare(pickup, destination);
        console.log("get fare", fare);

        res.status(200).json({ fare });
    } catch (error) {
        console.error("Error getting fare:", error);
        res.status(500).json({ error: error.message || "Internal server error" });
    }
};