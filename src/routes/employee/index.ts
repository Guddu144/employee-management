import { Router } from "express";
import { addEmployee } from "./add-employee";
import { updateEmployee } from "./update-employee";
import { fetchEmployee } from "./fetch-employee";
import { deleteEmployee } from "./delete-employee";
import { fetchEmployees } from "./fetch-employees";

const router = Router();
router.post("/add", addEmployee);
router.get("/", fetchEmployees);
router.patch("/:id", updateEmployee);
router.get("/:id", fetchEmployee);
router.delete("/:id", deleteEmployee);

export default router;
