import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/Database.js"
import PatientRoute from "./routes/PatientRoute.js";
import FeedbackRoute from "./routes/FeedbackRoute.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Untuk menerima body dari http request
app.use(cors());

//ROUTES
app.use(PatientRoute);
app.use(FeedbackRoute)



db.sync({ alter: true })
    .then(() => {
        console.log("Database Connected Succesfully")
        app.listen(PORT, () => {
            console.log('Server is running on port ${PORT}');
        });
    })
    .catch((error) => {
        console.log('Database Connection Failed: ${error}');
    });
