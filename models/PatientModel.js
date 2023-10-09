import { DataTypes } from "sequelize";

import db from "../config/Database.js"

const Patient = db.define("Patient", {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
      },
    doctor: {
        type: DataTypes.STRING,
      },
      appointment_time: {
        type: DataTypes.STRING,
      },
    
});

export default Patient;


// If table "Patient" doesn't exist, this function creates it 
// (async () => {
//    await db.sync();
// })();