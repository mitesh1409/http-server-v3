import express from 'express';

import { greetings } from './controllers/greetings.controller.js';

const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

app.get('/api/greetings', greetings);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
