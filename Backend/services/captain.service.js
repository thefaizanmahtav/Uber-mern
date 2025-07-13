import { captainModel } from "../models/captain.model.js";


export const createCaptain = async ({
    firstName, lastName, email, password, color, plate, capacity, vehicleType
}) => {

    if (!firstName || !lastName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required")
    }

    const captain = await captainModel.create({
        fullName: {
            firstName,
            lastName: lastName || ""
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain
}