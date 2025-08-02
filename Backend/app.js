import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import connectToDatabase from "./db/db.js"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser" 
import captainRouter from "./routes/captain.routes.js"


connectToDatabase()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use("/users", userRouter )
app.use("/captains", captainRouter )


app.get("/", (req, res) => {
    res.send("Hello Mahtav 🫡")
})

export default app