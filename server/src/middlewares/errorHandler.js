import { errorResponse } from "../utils/apiResponse.js";

const errorHandler = (err, req, res, next) => {
  // Multer errors (e.g. LIMIT_FILE_SIZE) are client errors, not server errors —
  // map them to 400 explicitly since MulterError has no statusCode of its own.
  const isMulterError = err.name === "MulterError";
  const statusCode = err.statusCode || (isMulterError ? 400 : 500);
  const message = err.message || "Internal server error";
  const details = err.details || null;
  const code = err.code || (isMulterError ? err.code : "INTERNAL_SERVER_ERROR");

  if (process.env.NODE_ENV !== "test") {
    console.error(err);
  }

  return errorResponse(res, statusCode, message, details, code);
};

export default errorHandler;
