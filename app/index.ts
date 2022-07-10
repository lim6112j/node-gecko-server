import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { generateToken } from './api/utils/jwt.utils';
import * as path from 'path';
import routes from './api/routes';
import logger from './api/middlewares/logger.middleware';
import errorHandler from './api/middlewares/error-handler.middleware';
import * as MySQLConnector from './api/utils/mysql.connector';

const app = express();
const port = 3000;
