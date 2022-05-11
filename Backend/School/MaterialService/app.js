import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import materialRoute from './Route/MaterialRoute.js';

const app = express();
const port = 10001;

app.use(bodyParser.json());
app.use(cors());

app.use('/material', materialRoute);

app.listen(port, () => {
  console.log('Port 10001 is running');
})

