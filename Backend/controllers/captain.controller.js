import { captainModel } from "../models/captain.model.js";
import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.service.js";
import bcrypt from "bcrypt"
import { blacklistedTokenModel } from "../models/blackListedToken.js";



export const registerCaptain = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password, vehicle } = req.body

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


        return res.status(201).json({ captain, token })

    } catch (error) {
        console.error("CaptainRegister error:", error);
        next(error);
    }

}

export const loginCaptain = async (req, res, next) => {
    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;


        const captain = await captainModel.findOne({ email }).select("+password")

        if (!captain) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        const isMatch = await captain.comparePassword(password)

        if (!isMatch) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        const token = await captain.generateAuthToken()

        res.cookie("token", token)

        res.status(200).json({ captain, token, message: "Captain Login Successfuly" })


    } catch (error) {
        console.log("Login captain", error);
        next(error)
    }

}

export const captainProfile = async (req, res, next) => {

    return res.status(200).json({ captain: req.captain })

}

export const logoutCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    await blacklistedTokenModel({ token })

    res.clearCookie("token")

    res.status(200).json({ message: "Captain Loggout Successfuly" })

}