import express from 'express';
import bodyparser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import apirouter from './routes/api.route.js';
const app = express();
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001','http://192.168.0.20:3000'],
    credentials: true
}));
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(compression());
const port = 1000;
app.use("/", express.static(__dirname + '/public'));
//router
app.use('/api', apirouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Authentication service listening on port ${port}!`));
