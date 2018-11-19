import {useMessage} from './use-message';
import {Message} from '../structs';

describe('useMessage', () => {
  const aMessage = () => useMessage('text');

  test('returns', () => {
    const {
      message,
      updateText,
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
    const {message, setChannel, useDialog} = aMessage();
    setChannel('channel');

    const {setSubmitLabel, useElement} = useDialog(
      'triggerId',
      'callbackId',
      'title',
    );
    setSubmitLabel('submitLabel');

    const types = ['text', 'textarea', 'select'];

    const dialogElements = [0, 1, 2].map(i => {
      const values = {
        type: types[i] as 'text' | 'textarea' | 'select',
        label: `label${i}`,
        name: `name${i}`,
        value: `value${i}`,
      };

      const {setType} = useElement(values.label, values.name, values.value);
      setType(values.type);

      return values;
    });

    expect(message.text).toBe('text');
    expect(message.channel).toBe('channel');
    expect(message.triggerId).toBe('triggerId');
    expect(message.dialog).toMatchObject({
      callbackId: 'callbackId',
      title: 'title',
      submitLabel: 'submitLabel',
      elements: dialogElements,
    });
  });

  test('attachment', () => {
    const {message, setChannel, setAsUser, useAttachment} = aMessage();
    setChannel('channel');
    setAsUser(true);

    const attachments = [0, 1].map(i => {
      const attachment = {
        callbackId: `callbackId${i}`,
        pretext: `pretext${i}`,
        text: `text${i}`,
        fields: [0, 1, 2].map(j => {
          const field: any = {
            title: `title${j}`,
            value: `value${j}`,
          };

          if (i % 2 === 1) {
            field.short = true;
          }

          return field;
        }),
      };
      const {setText, setPretext, useField} = useAttachment(
        attachment.callbackId,
      );
      setPretext(attachment.pretext);
      setText(attachment.text);
      attachment.fields.map((field: any) => {
        const {setShort} = useField(field.title, field.value);
        if (field.short !== undefined) {
          setShort(field.short);
        }
      });

      return attachment;
    });

    const exported = message.export();

    expect(exported.text).toBe('text');
    expect(exported.channel).toBe('channel');
    expect(exported.asUser).toBeTruthy();
    expect(exported.attachments).toMatchObject(attachments);

    const exportedInSnakecaseKeys = message.export(true);
    expect(exportedInSnakecaseKeys).toHaveProperty('as_user');
  });
});
