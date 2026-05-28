import { Router } from 'express';
import { readDB, writeDB, generateId } from '../data/db';
import { authenticateToken, requireAdmin } from '../middleware/auth';
import { delayMiddleware } from '../middleware/delay';

const router = Router();

// Only admin can access these routes
router.use(authenticateToken, requireAdmin, delayMiddleware);

// Get all users
router.get('/', (req, res) => {
    const db = readDB();
    // exclude passwords
    const users = db.users.map(({ password, ...user }: any) => user);
    res.json(users);
});

// Add new user
router.post('/', (req, res) => {
    const db = readDB();
    const newUser = { id: generateId(), ...req.body };
    db.users.push(newUser);
    writeDB(db);
    res.status(201).json({ id: newUser.id, username: newUser.username, role: newUser.role, name: newUser.name });
});

// Update user
router.put('/:id', (req, res) => {
    const db = readDB();
    const index = db.users.findIndex((u: any) => u.id === req.params.id);
    if (index !== -1) {
        db.users[index] = { ...db.users[index], ...req.body };
        writeDB(db);
        res.json({ message: 'User updated successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete user
router.delete('/:id', (req, res) => {
    const db = readDB();
    db.users = db.users.filter((u: any) => u.id !== req.params.id);
    writeDB(db);
    res.json({ message: 'User deleted successfully' });
});

export default router;
