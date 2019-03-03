/// <reference types="node" />

import {IncomingMessage, ServerResponse} from 'http';

export type Middleware<T = any> = (
  req: IncomingMessage,
  res: ServerResponse,
) => Promise<T>;

export const combineMiddlewares = (...middlewares: Middleware[]) => async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  // tslint:disable:no-empty
  for (const middleware of middlewares) {
    try {
      await middleware(req, res);
      break;
    } catch {}
  }
  // tslint:enable:no-empty
};
