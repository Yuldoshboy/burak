import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

// console.log('PORT:', process.env.PORT);

// console.log('MONGO_URL:', process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection is successful");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.log(`Our project is succesfully run in port: ${PORT}!`);
        });
    })
    .catch((err) => console.log("Error on the connection with MongoDB!", err));
    