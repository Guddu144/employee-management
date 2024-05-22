import { Router } from "express";
import EmployeeRouter from "./employee/index"
import EmployeerRouter from "./employeer/index"
import FileRouter from "./excel-upload/index"
import UserRouter from "./user/index"
import checkSession from "../middleware/check-session";

const router = Router();

router.use('/user',UserRouter
  // #swagger.tags = ['User']
)
router.use('/employee',checkSession,EmployeeRouter
  // #swagger.tags = ['Employee']
   /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
router.use('/employeer',checkSession,EmployeerRouter
  // #swagger.tags = ['Employeer']

   /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
router.use('/files',checkSession,FileRouter
  // #swagger.tags = ['BulkUpload']

   /* #swagger.security = [{
            "bearerAuth": []
    }] */
)


export default router;
