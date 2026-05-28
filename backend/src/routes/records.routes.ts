import { Router } from 'express';
import { readDB } from '../data/db';
import { authenticateToken } from '../middleware/auth';
import { delayMiddleware } from '../middleware/delay';

const router = Router();

// Require authentication for all record routes
router.use(authenticateToken, delayMiddleware);

// Get records for the logged-in user
router.get('/', (req, res) => {
    const db = readDB();
    const user = (req as any).user;
    
    // Admin can see all records, general user only their own
    let records = db.records;
    if (user.role !== 'Admin') {
        records = records.filter((r: any) => r.userId === user.id);
    }
    
    res.json(records);
});

export default router;
