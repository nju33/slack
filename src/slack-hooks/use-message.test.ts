import {useMessage} from './use-message';
import {Message} from '../structs';

describe('useMessage', () => {
  const aMessage = () => useMessage('text');

  test('returns', () => {
    const {
      message,
      updateText,
      setToken,
      setChannel,
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
    expect(setToken).toBeInstanceOf(Function);
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
  });

  test('updateText', () => {
    const {message, updateText} = aMessage();

    expect(message.text).toBe('text');
    updateText(text => `updated-${text}`);
    expect(message.text).toBe('updated-text');
  });

  test('setChannel', () => {
    const {message, setChannel} = aMessage();

    expect(message.channel).toBeUndefined();
    setChannel('channel');
    expect(message.channel).toBe('channel');
  });

  test('setAsUser', () => {
    const {message, setAsUser} = aMessage();

    expect(message.asUser).toBeUndefined();
    setAsUser(true);
    expect(message.asUser).toBeTruthy();
  });

  test('setIconEmoji', () => {
    const {message, setIconEmoji} = aMessage();

    expect(message.iconEmoji).toBeUndefined();
    setIconEmoji('iconEmoji');
    expect(message.iconEmoji).toBe('iconEmoji');
  });

  test('setIconUrl', () => {
    const {message, setIconUrl} = aMessage();

    expect(message.iconUrl).toBeUndefined();
    setIconUrl('iconUrl');
    expect(message.iconUrl).toBe('iconUrl');
  });

  test('setLinkNames', () => {
    const {message, setLinkNames} = aMessage();

    expect(message.linkNames).toBeUndefined();
    setLinkNames(true);
    expect(message.linkNames).toBeTruthy();
  });

  test('setMrkdwn', () => {
    const {message, setMrkdwn} = aMessage();

    expect(message.mrkdwn).toBeUndefined();
    setMrkdwn(true);
    expect(message.mrkdwn).toBeTruthy();
  });

  test('setParse', () => {
    const {message, setParse} = aMessage();

    expect(message.parse).toBeUndefined();
    setParse('full');
    expect(message.parse).toBe('full');
  });

  test('setReplyBroadcast', () => {
    const {message, setReplyBroadcast} = aMessage();

    expect(message.replyBroadcast).toBeUndefined();
    setReplyBroadcast(true);
    expect(message.replyBroadcast).toBeTruthy();
  });

  test('setThreadTs', () => {
    const {message, setThreadTs} = aMessage();

    expect(message.threadTs).toBeUndefined();
    setThreadTs('123456789.12345');
    expect(message.threadTs).toBe('123456789.12345');
  });

  test('setUnfurlLinks', () => {
    const {message, setUnfurlLinks} = aMessage();

    expect(message.unfurlLinks).toBeUndefined();
    setUnfurlLinks(true);
    expect(message.unfurlLinks).toBeTruthy();
  });

  test('setUnfurlMedia', () => {
    const {message, setUnfurlMedia} = aMessage();

    expect(message.unfurlMedia).toBeUndefined();
    setUnfurlMedia(true);
    expect(message.unfurlMedia).toBeTruthy();
  });

  test('setUsername', () => {
    const {message, setUsername} = aMessage();

    expect(message.username).toBeUndefined();
    setUsername('username');
    expect(message.username).toBe('username');
  });

  test('dialog', () => {
    const answer = {
      text: 'text',
      channel: 'channel',
      triggerId: 'triggerId',
      dialog: {
        callbackId: 'callbackId',
        title: 'title',
        submitLabel: 'submitLabel',
        elements: [
          {
            type: 'text',
            label: 'label',
            name: 'name',
            value: 'value',
          },
        ],
      },
    };

    const {message, setChannel, useDialog} = aMessage();
    setChannel(answer.channel);

    const {setSubmitLabel, useTextElement} = useDialog(
      answer.triggerId,
      answer.dialog.callbackId,
      answer.dialog.title,
    );
    setSubmitLabel('submitLabel');

    const e0 = answer.dialog.elements[0];
    useTextElement(e0.label, e0.name, e0.value);

    const json = message.export(false);
    expect(json).toMatchObject(answer);
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

    const {message, useAttachment} = aMessage();
    ['foo', 'bar'].map((text, i) => {
      const {setText} = useAttachment(`callbackId${i + 1}`);
      setText(text);
    });

    const json = message.export(false);
    expect(json).toMatchObject(answer);
  });

  test('export', () => {
    const {message, setAsUser} = aMessage();
    setAsUser(true);

    expect(message.export()).toHaveProperty('as_user');
    expect(message.export(false)).toHaveProperty('asUser');
  });
});
