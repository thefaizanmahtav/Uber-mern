import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt, { compare } from "bcrypt"


const captainSchema = new mongoose.Schema({

    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at leat 3 charectors long"]
        },
        lastName: {
            type: String,
            minlength: [3, "Last name must be at leat 3 charectors long"]
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at leat 5 charectors long"]
    },

    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, "Password must be at leat 6 charectors long"]
    },

    socketId: {
        type: String
    },

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long"]
        },

        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 characters long"]
        },

        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },

        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "bike", "autoRickshaw"],
        }


    }

})

captainSchema.methods.generateAuthToken = async function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" })
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}


export const captainModel = mongoose.model("Captain", captainSchema)