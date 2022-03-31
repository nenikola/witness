import '../utils/config';
import express from 'express';
import makeExpressCallback from '../utils/makeExpressCallback';
import { reportController } from './controllers';
import { body } from 'express-validator';
import { logger } from '../utils/logger';
import { logger as expressLogger } from 'express-winston';

const app: express.Application = express();

app.use(express.json());
app.use(expressLogger(logger));

app.post(
  '/reports',
  body('name').isLength({ min: 1 }),
  body('phoneNumber').isMobilePhone('any'),
  makeExpressCallback(reportController.postReport)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}...`);
});
