// node js server library 
const express = require("express"); 
const app = express(); 

// routes 
const userRoute = require("./routes/users"); 
const authRoute = require("./middlewear/auth"); 
const postRoute = require("./routes/posts")

// .env file library 
const dotenv = require("dotenv"); 
dotenv.config();

// mongo database library 
const mongoose = require("mongoose"); 
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log("Zenchat database connected...")
});

// helmet library for security 
const helmet = require("helmet"); 

// morgan library for api ease of use
const morgan = require("morgan"); 

// middleware 
app.use(express.json()); 
app.use(helmet()); 
app.use(morgan("common")); 

// routes 
app.use("/api/users", userRoute); 
app.use("/api/auth", authRoute); 
app.use("/api/posts", postRoute)

// server root 
// - port 8800
app.listen(3000,() => {
    console.log("Backend Server Started..."); 
})