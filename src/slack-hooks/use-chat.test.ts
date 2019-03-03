import {useChat} from './use-chat';

describe('useMessage', () => {
  test('postMessage', () => {
    const {
      json,
      updateText,
      setToken,
      setChannel,
      setTs,
      setAsUser,
      setIconEmoji,
      setIconUrl,
      setLinkNames,
      setMrkdwn,
      setParse,
      setReplyBroadcast,
      setThreadTs,
      setUnfurlLinks,
      setUnfurlMedia,
      setUsername,
      useAttachment,
    } = useChat('postMessage', 'text');

    expect(json).toBeInstanceOf(Function);
    expect(updateText).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setTs).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setAsUser).toBeInstanceOf(Function);
    expect(setIconEmoji).toBeInstanceOf(Function);
    expect(setIconUrl).toBeInstanceOf(Function);
    expect(setLinkNames).toBeInstanceOf(Function);
    expect(setMrkdwn).toBeInstanceOf(Function);
    expect(setParse).toBeInstanceOf(Function);
    expect(setReplyBroadcast).toBeInstanceOf(Function);
    expect(setThreadTs).toBeInstanceOf(Function);
    expect(setUnfurlLinks).toBeInstanceOf(Function);
    expect(setUnfurlMedia).toBeInstanceOf(Function);
    expect(setUsername).toBeInstanceOf(Function);
    expect(useAttachment).toBeInstanceOf(Function);
  });

  test('update', () => {
    const {
      json,
      updateText,
      setToken,
      setChannel,
      setTs,
      setAsUser,
      setParse,
      useAttachment,
    } = useChat('update', 'text');

    expect(json).toBeInstanceOf(Function);
    expect(updateText).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setTs).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setAsUser).toBeInstanceOf(Function);
    expect(setParse).toBeInstanceOf(Function);
    expect(useAttachment).toBeInstanceOf(Function);
  });

  test('delete', () => {
    const {json, setToken, setChannel, setTs, setAsUser} = useChat('delete');

    expect(json).toBeInstanceOf(Function);
    expect(setToken).toBeInstanceOf(Function);
    expect(setTs).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setAsUser).toBeInstanceOf(Function);
  });

  test('attachment', () => {
    const answer = {
      text: 'text',
      attachments: [
        {
          callbackId: 'callbackId1',
          text: 'foo',
        },
        {
          callbackId: 'callbackId2',
          text: 'bar',
        },
      ],
    };

    const {json, useAttachment} = useChat('postMessage', 'text');
    ['foo', 'bar'].map((text, i) => {
      const {setText} = useAttachment(`callbackId${i + 1}`);
      setText(text);
    });

    expect(json(false)).toMatchObject(answer);
  });

  test('handler', () => {
    const callbackId = 'callbackId';
    const {useAttachment} = useChat('postMessage', 'text');

    const {useListener} = useAttachment(callbackId);

    const callback = jest.fn();
    const callback2 = jest.fn();
    useListener('interactive_message', 'button', callback)({
      type: 'interactive_message',
      actions: [
        {type: 'button'}
      ],
      callbackId
    });

    useListener('interactive_message', 'button', callback)({
      type: 'interactive_message',
      actions: [
        {type: 'button'}
      ],
      callbackId: 'callbackXox'
    });

    expect(callback.mock.calls.length).toBe(1);
    expect(callback2.mock.calls.length).toBe(0);
  });
});
