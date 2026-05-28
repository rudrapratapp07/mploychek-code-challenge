import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { readDB } from '../data/db';
import { JWT_SECRET } from '../middleware/auth';
import { delayMiddleware } from '../middleware/delay';

const router = Router();

router.post('/login', delayMiddleware, (req, res) => {
    const { username, password } = req.body;
    const db = readDB();
    
    const user = db.users.find((u: any) => u.username === username && u.password === password);
    
    if (user) {
        const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, role: user.role, name: user.name } });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

export default router;
