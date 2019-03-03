import nock from 'nock';
import {Logger} from './logger';

describe('Logger', () => {
  let logger: Logger;

  beforeAll(() => {
    nock.disableNetConnect();
  });

  beforeEach(() => {
    logger = new Logger('accessToken', 'channel');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('log', async () => {
    const value = 'text';

    nock('https://slack.com')
      .post('/api/chat.postMessage', (body: any) => {
        expect(body).toMatchObject({
          text: '',
          attachments: [{footer: value}],
        });
        return true;
      })
      .reply(200, {
        ok: true,
        channel: 'XXXXXXXXX',
        ts: '9999999999.999999',
        message: {
          text: 'text',
          username: 'foo',
          bot_id: 'XXXXXXXXX',
          attachments: [{footer: value}],
          type: 'message',
          subtype: 'bot_message',
          ts: '9999999999.999999',
        },
      });

    await logger.log(value);
  });

  test('error', async () => {
    const value = 'text';
    const color = '#cb1b45';

    nock('https://slack.com')
      .post('/api/chat.postMessage', (body: any) => {
        expect(body).toMatchObject({
          text: '',
          attachments: [{footer: value, color}],
        });
        return true;
      })
      .reply(200);

    await logger.error(value);
  });

  test('info', async () => {
    const value = 'text';
    const color = '#005caf';

    nock('https://slack.com')
      .post('/api/chat.postMessage', (body: any) => {
        expect(body).toMatchObject({
          text: '',
          attachments: [{footer: value, color}],
        });
        return true;
      })
      .reply(200);

    await logger.info(value);
  });
});
