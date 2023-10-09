import express from "express";
import { createPatient, getAllBookings} from "../controllers/PatientController.js";
const router = express.Router();

router.post("/patients", createPatient);
router.get("/patients", getAllBookings); 

export default router;