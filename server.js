const express=require("express");
const cors = require("cors");  

// creation d'instance 

const app =express();
  

app.use(express.json());
require("dotenv").config();
// appel cors
app.use(cors());
app.options("*", cors());
// connect db 



const connectDB=require("./config/connectDB")
connectDB(); 

// create routes 


app.use("/api/user",require("./routes/user"))
app.use("/api/food",require("./routes/food"))




// create port

const PORT=process.env.PORT ||2224


// create server


app.listen(PORT,error => {
    error ? console.error(`fail to connect, ${error}`) :
    console.log (`server is running at ${PORT}`)
})