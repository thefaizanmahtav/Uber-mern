import { rideModel } from '../models/ride.model.js';
import { getDistanceTimeService } from "./maps.service.js";
import { getAddressCoordinate } from './maps.service.js';
import crypto from 'crypto';

const FARE_PER_KM = 10; // example rate

export const getFare = async (origin, destination) => {
    try {
        const data = await getDistanceTimeService(origin, destination);

        if (!data || !data.distanceValue) {
            throw new Error("Could not get distance/time");
        }

        // distanceValue is in meters, convert to km
        const fare = (data.distanceValue / 1000) * FARE_PER_KM;

        return fare;
    } catch (error) {
        console.error("Error calculating fare:", error.message);
        throw new Error("Could not calculate fare");
    }
};

const getOtp = (num) => {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num) - 1);
    return otp;
}

const VEHICLE_TYPE_MULTIPLIER = {
    car: 1,
    moto: 0.6,
    auto: 0.8,
};

export const createRide = async ({ userId, pickup, destination, vehicleType }) => {
    if (!userId || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }

    if (!VEHICLE_TYPE_MULTIPLIER[vehicleType]) {
        throw new Error("Invalid vehicle type");
    }

    // Convert pickup and destination to coordinates
    const pickupCoords = await getAddressCoordinate(pickup);
    const destinationCoords = await getAddressCoordinate(destination);

    // Calculate base fare
    const baseFare = await getFare(pickupCoords, destinationCoords);

    // Apply vehicle type multiplier
    const fareValue = Math.round(baseFare * VEHICLE_TYPE_MULTIPLIER[vehicleType]);

    const newRide = new rideModel({
        userId,
        pickup: pickup,
        destination: destination,
        otp: getOtp(6),
        vehicleType,
        fare: fareValue,
    });

    await newRide.save();

    return newRide;
}; 