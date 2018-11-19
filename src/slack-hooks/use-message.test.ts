import {useMessage} from './use-message';
import {Message} from '../structs';

describe('useMessage', () => {
  const aMessage = () => useMessage('text');

  test('returns', () => {
    const {
      message,
      updateText,
      setChannel,
      setColor,
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
    } = aMessage();

    expect(message).toBeInstanceOf(Message);
    expect(updateText).toBeInstanceOf(Function);
    expect(setChannel).toBeInstanceOf(Function);
    expect(setColor).toBeInstanceOf(Function);
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
  });

  test('updateText', () => {
    const {message, updateText} = aMessage();

    expect(message.text).toBe('text');
    updateText(text => `updated-${text}`);
    expect(message.text).toBe('updated-text');
  });
});
