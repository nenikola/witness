import Request from '../src/controllers/request';
import { Request as ExpressReq, Response as ExpressRes } from 'express';
import Response from '../src/controllers/response';
import { validationResult } from 'express-validator';

export default function makeExpressCallback(
  controllerFunction: (request: Request) => Promise<Response>
) {
  return async function (req: ExpressReq, res: ExpressRes) {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      res.status(400).send(validationErrors.array());
      return;
    }
    const request: Request = {
      ip: req.socket.remoteAddress,
      body: req.body,
    };
    const response = await controllerFunction(request);

    if (response.headers) {
      res.set(response.headers);
    }
    res.status(response.statusCode);
    res.send(response.body);
  };
}
