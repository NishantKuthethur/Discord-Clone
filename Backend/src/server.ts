import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || process.env.API_PORT;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});