import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at leat 3 charectors long"]
        },
        lastName: {
            type: String,
            minlenth: [3, "Last name must be at leat 3 charectors long"]
        },
    },
    email: {
        type: String,
        required: true,
        minlength: [5, "Email must be at least 5 charectors long"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 charectors long"],
        select: false
    },
    soketId: {
        type: String
    }

})


userSchema.methods.generateAuthToken = async function () {
    return jwt.sign({ _id: this._id, fullName: this.fullName, email: this.email }, process.env.JWT_SECRET, { expiresIn: "24h" })

}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

export const userModel = mongoose.model("user", userSchema)
