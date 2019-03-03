import {Query} from './query';

describe('Query', () => {
  test('truthy', () => {
    const query = new Query({
      ['serveo-subdomain']: 'foo',
    });

    expect(query.serveoSubdomain).toBe('foo');
  });

  test('falsy', () => {
    const query = new Query({});

    expect(query.serveoSubdomain).toBeFalsy();
  });
});
