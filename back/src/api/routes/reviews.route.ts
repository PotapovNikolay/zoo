import { Router } from "express";

import {
    getReviews,
    getReview,
    deleteReview,
    createReview,
    patchReview,
    getReviewsByPagination,
} from "../controllers/reviews";

const router = Router();

router.get("/reviews", getReviews);
router.get("/reviews/:id", getReview);
router.get("/reviews-pagination/:offset", getReviewsByPagination);
router.patch("/reviews", patchReview);
router.post("/reviews", createReview);
router.delete("/reviews", deleteReview);

export { router as reviewRouter };
