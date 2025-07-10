import { userModel } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password } = req.body;

        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" })
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

        const user = await userModel.findOne({ email }).select("+password")

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

        const token = user.generateAuthToken()

        console.log("token",token);
        

        res.status(200).json(
            { user, token ,
                message:"Login successfuly"
             }
        )


    } catch (error) {
        console.log("loginUser", error)
        next(error)
    }

}