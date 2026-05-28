import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/users.routes';
import recordsRoutes from './routes/records.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/records', recordsRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('MPloyChek API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
