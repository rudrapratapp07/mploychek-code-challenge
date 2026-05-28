import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const DB_FILE = path.join(__dirname, 'database.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
    const initialData = {
        users: [
            { id: '1', username: 'admin', password: 'password', role: 'Admin', name: 'Admin User' },
            { id: '2', username: 'user', password: 'password', role: 'General User', name: 'John Doe' }
        ],
        records: [
            { id: '1', userId: '2', title: 'Background Check - Pending', status: 'Pending', date: new Date().toISOString() },
            { id: '2', userId: '2', title: 'Employment Verification - Verified', status: 'Completed', date: new Date().toISOString() }
        ]
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
}

export function readDB() {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
}

export function writeDB(data: any) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function generateId() {
    return uuidv4();
}
