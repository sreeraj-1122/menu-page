import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes.js';
import { connectDB } from './config/db.js';

// App config
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB 


connectDB()

// Define routes
app.use('/api/menu', menuRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
