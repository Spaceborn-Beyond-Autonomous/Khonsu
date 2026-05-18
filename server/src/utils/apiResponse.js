class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.message = message
        this.data = data
        this.statusCode = statusCode
        this.success = statusCode < 400
    }
}

const errorResponse = (res, statusCode, message, details = null, code = "ERROR") => {
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        details,
        code
    });
};

export { ApiResponse, errorResponse };