import express from "express";
import indexRouets from './routes/index.routes';

const app = express();

app.use(indexRouets)

export default app;