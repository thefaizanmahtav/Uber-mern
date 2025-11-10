import { userModel } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
import { blacklistedTokenModel } from "../models/blackListedToken.js";
import { captainModel } from "../models/captain.model.js";




export const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password } = req.body;

        const existingUserOrCaptain = await captainModel.findOne({ email }) || await userModel.findOne({ email })

        if (existingUserOrCaptain) {
            return res.status(400).json({ message: "Email is already in use by another user or captain" })
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = await createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
        });

        const token = await user.generateAuthToken();

        res.status(201).json({ user, token });
    } catch (error) {
        console.error("Register error:", error);
        next(error);
    }
};

export const loginUser = async (req, res, next) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const { email, password } = req.body
        let role = "user"

        let user = await userModel.findOne({ email }).select("+password")


        if (!user) {
            user = await captainModel.findOne({ email }).select("+password")
            role = "captain"
        }

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = await user.generateAuthToken()

        res.cookie("token", token)

        res.status(200).json(
            {
                user,
                token,
                role,
                message: "Login successfuly"
            }
        )

    } catch (error) {
        console.log("loginUser", error)
        next(error)
    }

}

export const userProfile = async (req, res, next) => {
    return res.status(200).json(req.user)

}


export const logoutUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    await blacklistedTokenModel({ token })

    res.clearCookie("token")

    res.status(200).json({ message: "User Loggout Successfuly" })

}