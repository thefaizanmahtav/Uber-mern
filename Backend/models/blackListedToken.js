import mongoose from "mongoose";


const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        expires: "24h"
    }
})

export const blacklistedTokenModel = mongoose.model("BlacklistToken", blacklistedTokenSchema)