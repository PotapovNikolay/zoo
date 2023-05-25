import { Router } from "express";

import {
    getActuals,
    getActual,
    deleteActual,
    createActual,
    patchActual,
    getActualsByPagination
} from "../controllers/actuals";


const router = Router();

router.get("/actuals", getActuals);
router.get("/actuals/:id", getActual);
router.get("/actuals-pagination/:offset", getActualsByPagination);
router.put("/actuals", patchActual);
router.post("/actuals", createActual);
router.delete("/actuals", deleteActual);

export { router as actualRouter };