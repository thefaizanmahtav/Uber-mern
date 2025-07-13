import express, { Router } from "express"
import { body } from "express-validator"
import { loginUser, logoutUser, registerUser, userProfile } from "../controllers/user.controller.js"
import { authUser } from "../middlewares/auth.middleware.js"

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
            .withMessage("Password Name must be al least 6 charector long")
    ],
    registerUser
)

userRouter.get("/login",
    [
        body("email")
            .isEmail()
            .withMessage("invalid Email"),

        body("password")
            .isLength({ min: 6 })
            .withMessage("Password Name must be al least 6 charector long")

    ],
    loginUser
)

userRouter.get("/profile", authUser, userProfile)

userRouter.get("/logout", authUser, logoutUser)

export default userRouter