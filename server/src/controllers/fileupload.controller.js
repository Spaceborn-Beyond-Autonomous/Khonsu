import { uploadToGDrive } from "../services/gdrive.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "No file uploaded");
    }

    const { buffer, originalname, mimetype } = req.file;

    try {
        const fileMetadata = await uploadToGDrive(buffer, originalname, mimetype);
        return res.status(200).json(
            new ApiResponse(200, fileMetadata, "File uploaded successfully")
        );
    } catch (error) {
        throw new ApiError(500, "Failed to upload file to Google Drive", [error.message]);
    }
});

export { uploadFile };