import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import {blacklistedTokenModel} from "../models/blackListedToken.js"
import { captainModel } from "../models/captain.model.js";

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
        res.status(401).json({ message: "Unauthorized" })
    }

    const isBlacklisted = await blacklistedTokenModel.findOne({ token: token })
    console.log(isBlacklisted);
    

    if (isBlacklisted) {
        res.status(401).json({ message: "Unauthorized" })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

export const authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) {
        res.status(401).json({ message: "Unauthorized" })
    }

    const isBlacklisted = await blacklistedTokenModel.findOne({ token: token })
    console.log(isBlacklisted);
    

    if (isBlacklisted) {
        res.status(401).json({ message: "Unauthorized" })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const captain = await captainModel.findById(decoded._id)
        

        req.captain = captain;

        return next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}