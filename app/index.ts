import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
//import { generateToken } from './api/utils/jwt.utils';
//import * as path from 'path';
import bodyParser from 'body-parser';
import routes from './api/routes';
//import logger from './api/middlewares/logger.middleware';
//import errorHandler from './api/middlewares/error-handler.middleware';
import * as MySQLConnector from './api/utils/mysql.connector';

const app = express();
const port = 3200;
MySQLConnector.init();
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/', routes);
app.listen(port, () => {
    console.log(`gecko server run on Port : ${port}`)
});
