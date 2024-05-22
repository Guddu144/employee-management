import { Router } from "express";
import loginUser from "./login-user";

const router = Router();
router.post("/login", loginUser);

export default router;
