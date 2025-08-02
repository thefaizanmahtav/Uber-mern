import express from "express";
import { body } from "express-validator";
import { captainProfile, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";
import { authUserAndCaptain } from "../middlewares/auth.middleware.js";
import { loginUser } from "../controllers/user.controller.js";

const captainRouter = express.Router();

// captains

captainRouter.post(
    "/register",
    [
        body("email")
            .isEmail()
            .withMessage("Invalid email"),

        body("fullName.firstName")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),

        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),

        body("vehicle.color")
            .isLength({ min: 3 })
            .withMessage("Color must be at least 3 characters long"),

        body("vehicle.plate")
            .isLength({ min: 3 })
            .withMessage("Plate must be at least 3 characters long"),

        body("vehicle.capacity")
            .isInt({ min: 1 })
            .withMessage("Capacity must be a number and at least 1"),

        body("vehicle.vehicleType")
            .isLength({ min: 3 })
            .withMessage("Vehicle type must be at least 3 characters long"),
    ],
    registerCaptain
);

captainRouter.post("/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
    ],
    loginUser
)

captainRouter.get("/profile", authUserAndCaptain, captainProfile)

captainRouter.post("/logout", authUserAndCaptain, logoutCaptain)

export default captainRouter;
