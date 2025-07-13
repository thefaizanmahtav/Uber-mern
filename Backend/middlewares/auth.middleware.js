import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import {blacklistedTokenModel} from "../models/blackListedToken.js"

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