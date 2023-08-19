import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/user/user.route';

const app: Application = express();
export const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', UserRoutes);

export default app;
