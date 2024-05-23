import { Router } from "express";
import loginUser from "./login-user";
import { fetchUsers } from "./fetch-users";
import checkSession from "../../middleware/check-session";

const router = Router();
router.post("/login", loginUser);
router.get("/", checkSession,fetchUsers);

export default router;
