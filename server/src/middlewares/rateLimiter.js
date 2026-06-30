import rateLimit from "express-rate-limit";

// Upload endpoint: resumes are submitted rarely by a legitimate visitor.
// 5 per hour per IP allows for a couple of genuine retries without enabling abuse.
export const uploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        statusCode: 429,
        message: "Too many upload attempts from this IP. Please try again later.",
        details: null,
        code: "RATE_LIMIT_EXCEEDED",
    },
});

// General baseline limiter for all API routes — protects the health check
// and any future routes from scripted abuse/scraping.
export const generalApiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        statusCode: 429,
        message: "Too many requests from this IP. Please try again later.",
        details: null,
        code: "RATE_LIMIT_EXCEEDED",
    },
});