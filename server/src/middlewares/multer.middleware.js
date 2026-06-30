import multer from "multer";
import { ApiError } from "../utils/ApiError.js";

const storage = multer.memoryStorage();

const allowedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const allowedExtensions = [".pdf", ".doc", ".docx"];

export const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB — matches what the frontend already promises users
    },
    fileFilter: (req, file, cb) => {
        const ext = file.originalname
            .toLowerCase()
            .slice(file.originalname.lastIndexOf("."));
        if (!allowedExtensions.includes(ext) || !allowedMimeTypes.includes(file.mimetype)) {
            return cb(new ApiError(400, "Only PDF and Word documents are accepted."));
        }
        cb(null, true);
    },
});
