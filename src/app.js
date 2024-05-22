import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express()

// To handle from where data is coming (frontend)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true 
}))

// To limit the incoming data, here is 16kb from frontend in json format
app.use(express.json({limit: "16kb"}))

// To encode the url, like in some url the space between is convert to "+" and in some cases it converts to "%20"
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// It is used to store some files like pdfs or others, here we store them in "public" folder
app.use(express.static("public"))


// cookie-parser is used to access and set user cookies in browser (perform CRUD operations on cookies)
app.use(cookieParser())


// Routes
import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)










export {app}