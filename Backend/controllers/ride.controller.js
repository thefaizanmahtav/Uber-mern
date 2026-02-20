import { createRide } from "../services/ride.service.js";
import { validationResult } from "express-validator";

export const rideController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
   const {  pickup, destination, vehicleType } = req.body;
    const user = req.user || req.captain; // Get the authenticated user (either user or captain)

    try {
        const ride = await createRide({ userId: user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);
    } catch (error) {
        console.error("Error creating ride:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
