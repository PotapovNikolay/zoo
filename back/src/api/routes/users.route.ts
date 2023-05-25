import { Router } from "express";
import { getMe, login } from "../controllers/users";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.get("/me", checkAuth, getMe)

router.post("/login", login);

export {router as usersRouter}
