import { uploadToGDrive } from "../services/gdrive.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Validates that file content actually matches its claimed type via magic bytes,
// so a renamed malicious file (e.g. malware.exe -> resume.pdf) is rejected.
const validateFileMagicBytes = (buffer, ext) => {
    if (buffer.length < 4) return false;

    if (ext === ".pdf") {
        // PDF files start with "%PDF"
        return buffer.slice(0, 4).toString("ascii") === "%PDF";
    }
    if (ext === ".doc") {
        // Legacy DOC (OLE Compound File) magic bytes: D0 CF 11 E0
        return buffer[0] === 0xd0 && buffer[1] === 0xcf &&
               buffer[2] === 0x11 && buffer[3] === 0xe0;
    }
    if (ext === ".docx") {
        // DOCX is a ZIP archive — magic bytes: PK\x03\x04
        return buffer[0] === 0x50 && buffer[1] === 0x4b &&
               buffer[2] === 0x03 && buffer[3] === 0x04;
    }
    return false;
};

// Strips anything that isn't alphanumeric, dot, hyphen, or underscore,
// and caps length, so the filename can't be used for path traversal
// or to inject unexpected characters into Drive metadata.
const sanitizeFilename = (name) => {
    const ext = name.toLowerCase().slice(name.lastIndexOf("."));
    const base = name.slice(0, name.lastIndexOf(".")).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 100);
    return `${base}${ext}`;
};

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "No file uploaded");
    }

    const { buffer, originalname, mimetype } = req.file;
    const ext = originalname.toLowerCase().slice(originalname.lastIndexOf("."));

    if (!validateFileMagicBytes(buffer, ext)) {
        throw new ApiError(400, "File content does not match the declared file type.");
    }

    const safeName = sanitizeFilename(originalname);

    try {
        const fileMetadata = await uploadToGDrive(buffer, safeName, mimetype);
        return res.status(200).json(
            new ApiResponse(200, fileMetadata, "File uploaded successfully")
        );
    } catch (error) {
        throw new ApiError(500, "Failed to upload file to Google Drive", [error.message]);
    }
});

export { uploadFile };