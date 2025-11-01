import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Captain",
    },

    pickup: {
        type: String,
        required: true,
    },

    destination: {
        type: String,
        required: true,
    },

    fare: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "in-progress", "completed", "cancelled"],
        default: "pending",
    },  

    duration: {
        type: Number,   
    },

    distance: {
        type: Number,
    },

    paymetId: {
        type: String,
    },

    orderId : {
        type: String,
    },

    signature: {
        type: String,
    }

});

export const rideModel = mongoose.model("ride", rideSchema);
