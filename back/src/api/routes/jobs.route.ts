import { Router } from "express";

import {
    getJobs,
    getJob,
    deleteJob,
    createJob,
    patchJob,
    getJobsByPagination,
} from "../controllers/job";

const router = Router();

router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.get("/jobs-pagination/:offset", getJobsByPagination);
router.patch("/jobs", patchJob);
router.post("/jobs", createJob);
router.delete("/jobs", deleteJob);

export { router as jobRouter };
