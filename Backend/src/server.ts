import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';

//imports custom files
import authRouter from './routes/auth/authRoutes'

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || process.env.API_PORT;

app.use(express.json());
app.use(cors());

//Register the routes
app.use('/api/auth', authRouter);

app.get('/health', (req: Request, res: Response) => {
  // Optionally include additional checks (like database connectivity, etc.)
  res.send('OK');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  }).catch((error) => {
    console.error('Database Connection Failed ', error);
  });



