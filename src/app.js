import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

// prefix route api/v1
const v1Route = '/api/v1';

// User routes
app.use(v1Route, routes);

export default app;
