import Feedback from "../models/FeedbackModel.js";

export const createFeedback = async (req, res) => {
    try {
        await Feedback.create(req.body);
        res.status(201).json({
            msg: "Feedback sent"    
        });
    }   catch (error) {
        res.send(error.message);
    }
}