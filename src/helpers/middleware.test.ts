import {Middleware, combineMiddlewares} from './middleware';

test('middleware', async () => {
  const aFn = jest.fn();
  const bFn = jest.fn();
  const cFn = jest.fn();

  const a: Middleware = (_req, _res) => {
    aFn();
    return Promise.reject();
  };

  const b: Middleware = (_req, _res) => {
    bFn();
    return Promise.resolve();
  };

  const c: Middleware = (_req, _res) => {
    cFn();
    return Promise.reject();
  };

  await combineMiddlewares(a, b, c)({} as any, {} as any);

  expect(aFn.mock.calls.length).toBe(1);
  expect(bFn.mock.calls.length).toBe(1);
  expect(cFn.mock.calls.length).toBe(0);
});
