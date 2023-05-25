import { Router } from "express";

import {
    getFaqs,
    getFaq,
    deleteFaq,
    createFaq,
    patchFaq,
    getFaqsByPagination,
} from "../controllers/faq";

const router = Router();

router.get("/faqs", getFaqs);
router.get("/faq", getFaq);
router.get("/faq/:id", getFaq);
router.get("/faq-pagination/:offset", getFaqsByPagination);
router.patch("/faq", patchFaq);
router.post("/faq", createFaq);
router.delete("/faq", deleteFaq);

export { router as faqRouter };
