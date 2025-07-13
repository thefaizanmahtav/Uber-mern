import { captainModel } from "../models/captain.model.js";
import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.service.js";



export const registerCaptain = async (req, res, next) => {
    try {

       const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password, vehicle } = req.body

        console.log("Body =>",req.body);
        // console.log("vehicle",vehicle);
        

        const existingCaptain = await captainModel.findOne({ email })

        if (existingCaptain) {
            return res.status(400).json({ message: "Captain already exists with this email" })
        }

        const hashedPassword = await captainModel.hashPassword(password)

        const captain = await createCaptain({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        })

        const token = await captain.generateAuthToken()


        return res.status(201).json({captain, token})

    } catch (error) {
        console.error("CaptainRegister error:", error);
        next(error);
    }

}