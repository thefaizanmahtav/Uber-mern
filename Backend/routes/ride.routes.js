import { Router } from 'express';
import { body, query } from 'express-validator';
import { getFareController, rideController } from '../controllers/ride.controller.js';
import { authUserAndCaptain } from '../middlewares/auth.middleware.js';

const rideRouter = Router();

// prifix: /rides

rideRouter.post("/create",
    authUserAndCaptain,
    body("pickup").isString().withMessage("Pickup location is required"),
    body("destination").isString().withMessage("Destination location is required"),
    body("vehicleType").isString().isIn(["car", "auto", "moto"]).withMessage("Vehicle type is invalid"),
    rideController
)

rideRouter.get("/get-fare",
    authUserAndCaptain,
    query("pickup").isString().isLength({ min: 3 }).withMessage("Pickup location is required"),
    query("destination").isString().isLength({ min: 3 }).withMessage("Destination location is required"),
    getFareController
)

export default rideRouter;