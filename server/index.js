import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js';
import tasksRoutes from './routes/tasks.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const __PORT__ = process.env.__PORT__ || 5000;

app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(__PORT__, () => console.log(`Server started on port: http://localhost:${__PORT__}`)))
    .catch(err => console.log(err));


app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);


