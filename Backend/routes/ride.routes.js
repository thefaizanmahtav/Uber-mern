import { Router } from 'express';
import { body } from 'express-validator';
import { rideController } from '../controllers/ride.controller.js';
import { authUserAndCaptain } from '../middlewares/auth.middleware.js';
console.log(authUserAndCaptain);

const rideRouter = Router();

// prifix: /rides

rideRouter.post("/create",
    authUserAndCaptain,
    
    body("pickup").isString().withMessage("Pickup location is required"),
    body("destination").isString().withMessage("Destination location is required"),
    body("vehicleType").isString().isIn(["car", "auto", "moto"]).withMessage("Vehicle type is invalid"),
    rideController
)


export default rideRouter;