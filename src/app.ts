import express from 'express';
import routes from './routes/index';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const app = express();
createConnection()

app.use(express.json());
app.use(routes);

export default app;
