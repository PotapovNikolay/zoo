import { Router } from "express";
import { addSubscriber, addFeedBack } from "../controllers/visitors";
import { addReview, getReviews } from "../controllers/visitors/reviews";

const router = Router();

router.post("/subscribe", addSubscriber);

router.post("/feedback", addFeedBack);

//router.post("/reviews", addReview);
//router.get("/reviews", getReviews)

export { router as visitorsRouter };
