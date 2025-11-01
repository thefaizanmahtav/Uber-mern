import { Router } from "express"
import { authUserAndCaptain } from "../middlewares/auth.middleware.js"
import { getCoordinates, getDistanceTimeController, getSuggestionController } from "../controllers/maps.controller.js"
import { query } from "express-validator"


const mapsRouter = Router()

// prefix 

// maps

mapsRouter.get("/get-coordinates",
    [
        query("address").isString().isLength({ min: 3 }),
        authUserAndCaptain
    ],
    getCoordinates
)

mapsRouter.get("/get-distance-time",
    [
        query("origin").isString().isLength({ min: 3 }),
        query("destination").isString().isLength({ min: 3 }),
        authUserAndCaptain
    ],
    getDistanceTimeController
)

mapsRouter.get("/get-suggestion",
    query("input").isString().isLength({ min: 3 }),
    getSuggestionController
)

export default mapsRouter