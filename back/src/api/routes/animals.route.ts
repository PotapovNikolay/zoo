import { Router } from "express";
import {
    getAnimals,
    getAnimal,
    getAnimalsByPagination,
    patchAnimal,
    createAnimal,
    deleteAnimal,
    uploadImage,
    getClasses,
    getClass,
} from "../controllers/animals";

import { upload } from "../../middleware/uploadFiles";

const router = Router();

router.get("/animals", getAnimals);
router.get("/animals/:slug", getAnimal);
router.patch("/animals", patchAnimal);
router.post("/animals", createAnimal);
router.delete("/animals", deleteAnimal);
router.get("/animals-pagination/:offset", getAnimalsByPagination);
router.post("/upload", upload.single("image"), uploadImage);
router.get("/classes", getClasses);
router.get("/classes/:slug", getClass);

export { router as animalRouter };
