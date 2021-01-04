import app from "./app"
import "./db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log(`Succesful!!! Log on ${PORT}`)
    }
);


