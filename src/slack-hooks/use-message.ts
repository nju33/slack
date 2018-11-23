import {Message} from './../structs';
import {useAttachment} from './use-attachment';
import {useDialog} from './use-dialog';

export const useMessage = (text: string) => {
  const message = new Message(text);

  return {
    message,
    updateText: message.updateText,
    setToken: message.setToken,
    setChannel: message.setChannel,
    setTs: message.setTs,
    setAsUser: message.setAsUser,
    setIconEmoji: message.setIconEmoji,
    setIconUrl: message.setIconUrl,
    setLinkNames: message.setLinkNames,
    setMrkdwn: message.setMrkdwn,
    setParse: message.setParse,
    setReplyBroadcast: message.setReplyBroadcast,
    setThreadTs: message.setThreadTs,
    setUnfurlLinks: message.setUnfurlLinks,
    setUnfurlMedia: message.setUnfurlMedia,
    setUsername: message.setUsername,
    useAttachment: useAttachment(message),
    useDialog: useDialog(message),
  };
};
