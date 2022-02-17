import express from 'express';
import cors from 'cors';

import { sequelize } from './src/database/database.js';

import { router } from './src/routes/index.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

app.use(router);

try {
  await sequelize.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});