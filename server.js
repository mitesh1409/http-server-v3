import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { greetings } from './controllers/greetings.controller.js';
import { mission } from './controllers/mission.controller.js';
import { staticRouter } from './routes/static.router.js';

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
// Serve static files/assets from the public directory.
app.use(express.static('public'));

app.use('/', staticRouter);
app.get('/api/greetings', greetings);
app.get('/mission', mission);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
