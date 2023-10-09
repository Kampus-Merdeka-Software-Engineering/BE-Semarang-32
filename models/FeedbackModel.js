import { DataTypes } from "sequelize";

import db from "../config/Database.js"

const Feedback = db.define("Feedback", {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING
      },
});

export default Feedback;


// If table "Feedback" doesn't exist, this function creates it 
// (async () => {
//    await db.sync();
// })();