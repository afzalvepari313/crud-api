import express, { Application } from 'express';
import userRoutes from './routes/userRoutes'; // Import user routes

const app: Application = express();

// Middleware (optional)

app.use('/api/users', userRoutes); // Mount user routes

app.listen(3000, () => console.log('Server listening on port 3000'));
