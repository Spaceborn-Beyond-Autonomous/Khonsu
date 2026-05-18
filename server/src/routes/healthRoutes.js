import express from 'express';
const router = express.Router();

// @desc  Health check
// @route GET /api/health
// @access Public
router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

export default router;
