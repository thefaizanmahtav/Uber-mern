import express, { Router } from "express"
import { body } from "express-validator"
import { loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controller.js"
import {  authUserAndCaptain } from "../middlewares/auth.middleware.js"

const userRouter = Router()

// prefix users

userRouter.post("/register",
    [
        body("email")
            .isEmail()
            .withMessage("invalid Email"),

        body("fullName.firstName")
            .isLength({ min: 3 })
            .withMessage("First Name must be al least 3 charector long"),

        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be al least 6 charector long")
    ],
    registerUser
)

userRouter.post("/login",
   [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
  ],
    loginUser
)

userRouter.get("/profile", authUserAndCaptain, userProfile)

userRouter.post("/logout", authUserAndCaptain, logoutUser)

export default userRouter