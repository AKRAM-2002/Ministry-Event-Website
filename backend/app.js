import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './utils/errorHandler.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Hello World!");
})

app.use('/api/auth', authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://test:test123@cluster0.ifjpips.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0';

console.log('MONGODB_URI:', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
