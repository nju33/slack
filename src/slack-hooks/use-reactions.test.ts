import {useReactions} from './use-reactions';

describe('useReactions', () => {
  test('add and delete', () => {
    const answer = {
      name: 'smile',
      token: 'token',
      channel: 'channel',
      timestamp: '123456789.12345',
    };
    const {json, setToken, updateName, setChannel, setTimestamp} = useReactions(
      'add',
      answer.name,
    );

    expect(json).toBeInstanceOf(Function);
    expect(updateName).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setTimestamp).toBeInstanceOf(Function);

    setToken(answer.token);
    setChannel(answer.channel);
    setTimestamp(answer.timestamp);

    expect(json()).toMatchObject(answer)
  });

  test('get', () => {
    const {json, setToken, setChannel, setFull, setTimestamp} = useReactions(
      'get',
    );

    expect(json).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setFull).toBeInstanceOf(Function);
    expect(setTimestamp).toBeInstanceOf(Function);
  });

  test('list', () => {
    const {
      json,
      setToken,
      setFull,
      setCount,
      setPage,
      setLimit,
      setCursor,
      setUser,
    } = useReactions('list');

    expect(json).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setFull).toBeInstanceOf(Function);
    expect(setCount).toBeInstanceOf(Function);
    expect(setPage).toBeInstanceOf(Function);
    expect(setLimit).toBeInstanceOf(Function);
    expect(setCursor).toBeInstanceOf(Function);
    expect(setUser).toBeInstanceOf(Function);
  });

});
