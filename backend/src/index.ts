import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import inventoryRoutes from './routes/inventoryRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Eczane SaaS Backend is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});