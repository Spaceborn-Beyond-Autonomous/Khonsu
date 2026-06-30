import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import errorHandler from './src/middlewares/errorHandler.js';
import notFound from './src/middlewares/notFound.js';
import healthRoutes from './src/routes/healthRoutes.js';
import fileuploadRoutes from './src/routes/fileupload.routes.js';

const app = express();

const allowedOrigin = (process.env.CLIENT_URL || "").replace(/\/$/, "");

app.use(cors({
    origin: (origin, callback) => {
        // Allow non-browser tools (curl, server-to-server, health checks) with no Origin header
        if (!origin) return callback(null, true);
        if (origin === allowedOrigin) return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/files', fileuploadRoutes);

// 404 handler
app.use(notFound);

// Error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
