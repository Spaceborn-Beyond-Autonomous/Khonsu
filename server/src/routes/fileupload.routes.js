import { Router } from "express";
import { uploadFile } from "../controllers/fileupload.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/upload", uploadLimiter, upload.single("file"), uploadFile);

export default router;
