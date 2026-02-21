import { rideModel } from '../models/ride.model.js';
import { getDistanceTimeService, getAddressCoordinate } from "./maps.service.js";
import crypto from 'crypto';

const FARE_PER_KM = 10; // ₹10 per km

const VEHICLE_TYPE_MULTIPLIER = {
    car: 1,
    moto: 0.6,
    auto: 0.8,
};

export const getFare = async (pickup, destination) => {
    try {

        if (!pickup || !destination) {
            throw new Error("Pickup and destination required");
        }

        // Convert addresses → coordinates
        const pickupCoords = await getAddressCoordinate(pickup);
        const destinationCoords = await getAddressCoordinate(destination);

        if (!pickupCoords || !destinationCoords) {
            throw new Error("Invalid coordinates");
        }

        // 🔥 Get real-time distance only once
        const data = await getDistanceTimeService(pickupCoords, destinationCoords);

        if (!data || !data.distanceValue) {
            throw new Error("Could not get distance");
        }

        const distanceInKm = data.distanceValue / 1000;

        const baseFare = distanceInKm * FARE_PER_KM;

        // Calculate all vehicle fares
        const fares = {
            car: Math.round(baseFare * 1),
            moto: Math.round(baseFare * 0.6),
            auto: Math.round(baseFare * 0.8),
        };

        return {
            distanceInKm: distanceInKm.toFixed(2),
            duration: data.durationText,
            fares,
        };

    } catch (error) {
        console.error("Fare Calculation Error:", error.message);
        throw new Error("Could not calculate fare");
    }
};

const getOtp = (num) => {
    return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num) - 1);
};

export const createRide = async ({ userId, pickup, destination, vehicleType }) => {

    if (!userId || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }

    const fareData = await getFare(pickup, destination);

    const selectedFare = fareData.fares[vehicleType];

    if (!selectedFare) {
        throw new Error("Invalid vehicle type");
    }

    const newRide = new rideModel({
        userId,
        pickup,
        destination,
        vehicleType,
        fare: selectedFare,
        otp: getOtp(6),
    });

    await newRide.save();

    return newRide;
};