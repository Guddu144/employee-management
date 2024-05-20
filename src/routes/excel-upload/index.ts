import { Router } from "express";
import { bulkUpload } from "./bulk-upload";
import multer from "multer";

const router = Router();

const upload = multer({ dest: 'public/uploads/' });

router.post("/bulk-upload",upload.single('file'), bulkUpload);

export default router;
