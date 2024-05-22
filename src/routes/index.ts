import { Router } from "express";
import EmployeeRouter from "./employee/index"
import EmployeerRouter from "./employeer/index"
import FileRouter from "./excel-upload/index"
import UserRouter from "./user/index"
import checkSession from "../middleware/check-session";

const router = Router();

router.use('/user',UserRouter)
router.use('/employee',checkSession,EmployeeRouter
  // #swagger.tags = ['Employee']
)
router.use('/employeer',checkSession,EmployeerRouter
  // #swagger.tags = ['Employeer']
)
router.use('/files',checkSession,FileRouter
  // #swagger.tags = ['BulkUpload']
)


export default router;
