import {ServeoTransfer} from './serveo-transfer';

describe('ServeoTransfer', () => {
  test('basis', () => {
    const serveoTransfer = new ServeoTransfer('example', '/foo/bar');

    expect(serveoTransfer.origin).toBe('https://example.serveo.net');
    expect(serveoTransfer.requestPath).toBe(
      'https://example.serveo.net/foo/bar',
    );
  });
});
