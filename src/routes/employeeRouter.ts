import { Router } from "express";
import employeeController from "../controllers/employeeController";

const router = Router(); // Using express.Router() to create a router
router.post("/add-employee", employeeController.createEmployee);

export default router;
