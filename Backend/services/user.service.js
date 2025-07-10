import {userModel} from "../models/user.model.js";


export const createUser = async ({
    firstName, lastName, email, password,
}) => {
    if (!firstName || !email || !password) {
        throw new Error("All fields are required")
    }

    const user = await userModel.create({
        fullName: {
            firstName,
            lastName: lastName || ""
        },
        email,
        password
    })

    return user
}