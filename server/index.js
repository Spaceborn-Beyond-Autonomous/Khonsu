import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import errorHandler from './src/middlewares/errorHandler.js';
import notFound from './src/middlewares/notFound.js';
import healthRoutes from './src/routes/healthRoutes.js';
import fileuploadRoutes from './src/routes/fileupload.routes.js';

const app = express();

app.use(cors());
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
