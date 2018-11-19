import {Message} from './../structs';

export const useMessage = (text: string) => {
  const message = new Message(text);

  return {
    message,
    updateText: message.updateText,
    setChannel: message.setChannel,
    setColor: message.setColor,
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
  };
};
