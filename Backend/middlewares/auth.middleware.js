import jwt from "jsonwebtoken";
import { blacklistedTokenModel } from "../models/blackListedToken.js";
import { userModel } from "../models/user.model.js";
import { captainModel } from "../models/captain.model.js";

export const authUserAndCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const isBlacklisted = await blacklistedTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);
        const captain = await captainModel.findById(decoded._id);

        // Attach either user or captain to a common property
        req.authUserAndCaptain = user || captain;
        
        if (user) {
            req.authUserAndCaptain = user;
        } else if (captain) {
            req.authUserAndCaptain = captain;
        } else {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        next();

    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
};
