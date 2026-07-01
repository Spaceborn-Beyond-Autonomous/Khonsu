import { errorResponse } from "../utils/apiResponse.js";

const errorHandler = (err, req, res, next) => {
  // Multer errors (e.g. LIMIT_FILE_SIZE) are client errors, not server errors —
  // map them to 400 explicitly since MulterError has no statusCode of its own.
  const isMulterError = err.name === "MulterError";
  // CORS rejections are also client-side (disallowed origin), not server failures.
  const isCorsError = err.message === "Not allowed by CORS";
  // Busboy/multipart parser errors (e.g. malformed part headers from null-byte
  // or otherwise corrupted filenames) throw plain Errors with no statusCode —
  // these are malformed client requests, not server failures.
  const isMultipartError =
    !isMulterError &&
    !isCorsError &&
    typeof err.message === "string" &&
    /malformed part header|unexpected end of form|multipart:/i.test(err.message);
  // express.json()/body-parser sets err.status = 400 and err.type = "entity.parse.failed"
  // on malformed JSON bodies — the raw err.message exposes internal parser output
  // (e.g. exact character position), which is an information leak.
  const isJsonParseError =
    err.type === "entity.parse.failed" || (err instanceof SyntaxError && err.status === 400);

  const statusCode =
    err.statusCode ||
    (isMulterError ? 400 : isCorsError ? 403 : isMultipartError ? 400 : isJsonParseError ? 400 : 500);

  const message = isJsonParseError
    ? "Invalid request body."
    : isMultipartError
    ? "Malformed upload request."
    : err.message || "Internal server error";

  const details = err.details || null;

  const code =
    err.code ||
    (isMulterError
      ? err.code
      : isCorsError
      ? "CORS_NOT_ALLOWED"
      : isMultipartError
      ? "MALFORMED_MULTIPART"
      : isJsonParseError
      ? "INVALID_JSON_BODY"
      : "INTERNAL_SERVER_ERROR");

  if (process.env.NODE_ENV !== "test") {
    console.error(err);
  }

  return errorResponse(res, statusCode, message, details, code);
};

export default errorHandler;