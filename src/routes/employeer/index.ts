import { Router } from "express";
import { addEmployeer } from "./add-employeer";
import { updateEmployeer } from "./update-employeer";
import { fetchEmployeer } from "./fetch-employeer";
import { deleteEmployeer } from "./delete-employeer";


const router = Router();
router.post("/add", addEmployeer);
router.patch("/:id", updateEmployeer);
router.get("/:id", fetchEmployeer);
router.delete("/:id", deleteEmployeer);

export default router;
