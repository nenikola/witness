import express from 'express';
import makeExpressCallback from '../utils/makeExpressCallback';
import { reportController } from './controllers';
import { body } from 'express-validator';
import { config } from 'dotenv';

config();

const app: express.Application = express();

app.use(express.json());

app.post(
  '/reports',
  body('name').isLength({ min: 1 }),
  body('phoneNumber').isMobilePhone('any'),
  makeExpressCallback(reportController.postReport)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
