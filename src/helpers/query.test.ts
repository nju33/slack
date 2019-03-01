import {Query} from './query';

describe('Query', () => {
  test('truthy', () => {
    const query = new Query({
      ['serveo-subdomain']: 'foo',
    });

    expect(query.hasServeoSubdomain()).toBeTruthy();
  });

  test('falsy', () => {
    const query = new Query({
      foo: 'foo',
    });

    expect(query.hasServeoSubdomain()).toBeFalsy();
  });
});
