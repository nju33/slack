import {useFiles} from './use-files';

describe('useFiles', () => {
  test('returns', () => {
    const {
      json,
      setToken,
      setChannels,
      setContent,
      setFilename,
      setFiletype,
      setInitialComment,
      setThreadTs,
      setTitle,
    } = useFiles('upload');

    expect(json).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setChannels).toBeInstanceOf(Function);
    expect(setContent).toBeInstanceOf(Function);
    expect(setFilename).toBeInstanceOf(Function);
    expect(setFiletype).toBeInstanceOf(Function);
    expect(setInitialComment).toBeInstanceOf(Function);
    expect(setThreadTs).toBeInstanceOf(Function);
    expect(setTitle).toBeInstanceOf(Function);
  });

  test('json', () => {
    const {
      json,
      setToken,
      setChannels,
      setContent,
      setFilename,
      setFiletype,
      setInitialComment,
      setThreadTs,
      setTitle,
    } = useFiles('upload');

    const expected = {
      token: 'a',
      channels: 'foo,bar',
      content: 'aaa',
      filename: 'a',
      filetype: 'auto',
      initialComment: 'a',
      threadTs: '00000',
      title: 'a',
    };

    setToken(expected.token);
    setChannels(...expected.channels.split(','));
    setContent(expected.content);
    setFilename(expected.filename);
    setFiletype(expected.filetype);
    setInitialComment(expected.initialComment);
    setThreadTs(expected.threadTs);
    setTitle(expected.title);

    expect(json(false)).toMatchObject(expected);
  });
});
