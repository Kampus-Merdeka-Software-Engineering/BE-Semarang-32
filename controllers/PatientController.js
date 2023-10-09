import Patient from "../models/PatientModel.js";

export const createPatient = async (req, res) => {
    try {

        await Patient.create(req.body);
        res.status(201).json({
            msg: "Patient created"    
        });
    }   catch (error) {
        res.send(error.message);
    }
}

export const getAllBookings = async (req, res) => {
    try {

        const bookings = await Patient.findAll();
        res.status(201).json(bookings);
    }   catch (error) {
        res.send(error.message);
    }
}