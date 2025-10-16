import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { greetings } from './controllers/greetings.controller.js';
import { mission } from './controllers/mission.controller.js';
import { staticRouter } from './routes/static.router.js';
import { productsRouter } from './routes/products.router.js';
import { userSignupController } from './controllers/userSignupController.js';
import { userRouter } from './routes/user.router.js';

// Create an Express App.
const app = express();

// App directory.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set server PORT & HOSTNAME.
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

// Set template engine.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
const requestLogger = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Params: ${req.params}`);
    console.log(`Request Body: ${req.body}`);
    console.log(`Request Headers: ${req.headers}`);

    next();
};

const requestTimer = (req, res, next) => {
    const startTime = Date.now();

    next();

    const delta = Date.now() - startTime;
    console.log(`Request took ${delta}ms`);
};

app.use(requestTimer);
// Serve static files/assets from the public directory.
app.use(express.static('public'));
// for parsing application/json
app.use(express.json());
// Middleware to parse URL-encoded form data
// The option extended: true is generally recommended as it allows the parsing
// of nested objects and arrays from the form data, offering greater flexibility.
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Routes
app.use('/', staticRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', userRouter);
app.get('/api/greetings', greetings);
app.get('/mission', mission);
app.get('/user/sign-up', userSignupController);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
