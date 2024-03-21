import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './utils/errorHandler.js';
import cors from 'cors';
import { PORT, mongoDBURL } from './config/config.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Hello!");
})

app.use('/api/auth', authRoutes);
app.use(errorHandler);



mongoose
  .connect(mongoDBURL, {
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
