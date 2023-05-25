import { Router } from "express";

import {
    getFeedbacks,
    getFeedback,
    deleteFeedback,
    createFeedback,
    patchFeedback,
    getFeedbacksByPagination,
} from "../controllers/feedback";

const router = Router();

router.get("/feedback", getFeedback);
router.get("/feedback/:id", getFeedback);
router.get("/feedback-pagination/:offset", getFeedbacksByPagination);
// router.patch("/feedback", patchFeedback);
// router.post("/feedback", createFeedback);
router.delete("/feedback", deleteFeedback);

export { router as feedbackRouter };
