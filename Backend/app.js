import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import connectToDatabase from "./db/db.js"
import userRouter from "./routes/user.routes.js"


connectToDatabase()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/users", userRouter )

app.get("/", (req, res) => {
    res.send("Hello Mahtav 🫡")
})

export default app