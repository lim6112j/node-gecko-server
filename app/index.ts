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
import * as Minio from 'minio';

const app = express();
const port = 3200;
const minioClient = new Minio.Client({
    endPoint: 'nstorage',
    port: 9000,
    accessKey: 'lim6112j',
    secretKey: 'gogosin0',
    useSSL: false,
});
var file = '/home/ubuntu/start.sh';
var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-amx-Meta-Testing': 1234,
    'example': 5678
};
//minioClient.fPutObject('images', 'startback.sh', file, metaData, function (err, etag) {
//if (err) return console.log(err);
//console.log("File uploaded successfully");
//});
MySQLConnector.init();
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);
app.listen(port, () => {
    console.log(`gecko server run on Port : ${port}`)
});
