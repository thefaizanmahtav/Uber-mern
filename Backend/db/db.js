import mongoose, { connect } from "mongoose"

const connectToDatabase = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfuly');

    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

export default connectToDatabase