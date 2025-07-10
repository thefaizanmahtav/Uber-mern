import express, { Router } from "express"
import { body } from "express-validator"
import { loginUser, registerUser } from "../controllers/user.controller.js"

const userRouter = Router()

// prefix users

userRouter.post("/register",
    [
        body("email")
            .isEmail()
            .withMessage("invalid Email"),

        body("fullName.firstName")
            .isLength({ min: 3 })
            .withMessage("First Name must be al leat 3 charector long"),

        body("password")
            .isLength({ min: 6 })
            .withMessage("Password Name must be al leat 6 charector long")
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
            .withMessage("Password Name must be al leat 6 charector long")

    ],
    loginUser
)


export default userRouter