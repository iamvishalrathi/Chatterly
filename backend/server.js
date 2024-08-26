import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();

//Connect Mongo
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err)
    })

// import routes
import authRoutes from "./routes/auth.routes.js"
// import messageRoute from "./routes/message.routes.js"
// import userRoute from "./routes/user.routes.js"

app.use("/api/auth", authRoutes)
// app.use("/api/messages", messageRoute)
// app.use("/api/users", userRoute)

app.get("/",(req,res)=>{
    res.send("At root");
});

//Listening Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});