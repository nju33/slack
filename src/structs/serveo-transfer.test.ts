import nock from 'nock';
import url from 'url';
import {ServeoTransfer} from './serveo-transfer';

describe('ServeoTransfer', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('ok is truthy', async () => {
    const subdomainName = 'example';
    const origin = `https://${subdomainName}.serveo.net`;
    const path = '/foo/bar';
    const transferObject = {foo: 'fooo'};

    nock(origin)
      .get('/_status')
      .reply(200);

    nock(origin)
      .post(path, (body: any) => {
        expect(body).toMatchObject(transferObject);
        return true;
      })
      .reply(200, transferObject);

    const serveoTransfer = new ServeoTransfer(subdomainName, path);
    expect(serveoTransfer.origin).toBe(origin);
    expect(serveoTransfer.requestPath).toBe(url.resolve(origin, path));

    const status = await serveoTransfer.ok();
    expect(status).toBeTruthy();
    const result = await serveoTransfer.transfer(transferObject);
    expect(result).toMatchObject(transferObject);
  });

  test('ok is falsy', async () => {
    const subdomainName = 'example';
    const origin = `https://${subdomainName}.serveo.net`;
    const path = '/foo/bar';

    nock(origin)
      .get('/_status')
      .reply(502);

    const serveoTransfer = new ServeoTransfer(subdomainName, path);
    expect(serveoTransfer.origin).toBe(origin);
    expect(serveoTransfer.requestPath).toBe(url.resolve(origin, path));

    const result = await serveoTransfer.ok();
    expect(result).toBeFalsy();
  });
});
