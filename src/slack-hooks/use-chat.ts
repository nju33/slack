import {useAttachment} from './use-attachment';
import {ChatAPIType} from './../type-aliases';
import {Chat} from '../structs/slack';

// tslint:disable-next-line:no-namespace
namespace UseChat {
  export function fn(
    type: 'postMessage',
    text: string,
  ): {
    json: Chat['export'];
    updateText: Chat['updateText'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setTs: Chat['setTs'];
    setAsUser: Chat['setAsUser'];
    setIconEmoji: Chat['setIconEmoji'];
    setIconUrl: Chat['setIconUrl'];
    setLinkNames: Chat['setLinkNames'];
    setMrkdwn: Chat['setMrkdwn'];
    setParse: Chat['setParse'];
    setReplyBroadcast: Chat['setReplyBroadcast'];
    setThreadTs: Chat['setThreadTs'];
    setUnfurlLinks: Chat['setUnfurlLinks'];
    setUnfurlMedia: Chat['setUnfurlMedia'];
    setUsername: Chat['setUsername'];
    useAttachment: ReturnType<typeof useAttachment>;
  };
  export function fn(
    type: 'update',
    text: string,
  ): {
    json: Chat['export'];
    updateText: Chat['updateText'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setTs: Chat['setTs'];
    setAsUser: Chat['setAsUser'];
    setLinkNames: Chat['setLinkNames'];
    setParse: Chat['setParse'];
    useAttachment: ReturnType<typeof useAttachment>;
  };
  export function fn(
    type: 'delete',
  ): {
    json: Chat['export'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setTs: Chat['setTs'];
    setAsUser: Chat['setAsUser'];
  };
  export function fn(
    type: 'postEphemeral',
  ): {
    json: Chat['export'];
    updateText: Chat['updateText'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setUser: Chat['setUser'];
    setAsUser: Chat['setAsUser'];
    setLinkNames: Chat['setLinkNames'];
    setParse: Chat['setParse'];
    setThreadTs: Chat['setThreadTs'];
    useAttachment: ReturnType<typeof useAttachment>;
  };
  export function fn(
    type: 'meMessage',
    text: string,
  ): {
    json: Chat['export'];
    updateText: Chat['updateText'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
  };
  export function fn(
    type: 'getPermalink',
  ): {
    json: Chat['export'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setMessageTs: Chat['setMessageTs'];
  };

  export function fn(
    type: 'unfurl',
  ): {
    json: Chat['export'];
    setToken: Chat['setToken'];
    setChannel: Chat['setChannel'];
    setTs: Chat['setTs'];
    setUnfurls: Chat['setUnfurls'];
    setUserAuthMessage: Chat['setUserAuthMessage'];
    setUserAuthRequired: Chat['setUserAuthRequired'];
    setUserAuthUrl: Chat['setUserAuthUrl'];
  };

  export function fn(type: ChatAPIType, text?: string) {
    const chat = new Chat();

    switch (type) {
      case 'postMessage': {
        chat.setText(text as string);

        return {
          json: chat.export.bind(chat),
          updateText: chat.updateText,
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setTs: chat.setTs,
          setAsUser: chat.setAsUser,
          setIconEmoji: chat.setIconEmoji,
          setIconUrl: chat.setIconUrl,
          setLinkNames: chat.setLinkNames,
          setMrkdwn: chat.setMrkdwn,
          setParse: chat.setParse,
          setReplyBroadcast: chat.setReplyBroadcast,
          setThreadTs: chat.setThreadTs,
          setUnfurlLinks: chat.setUnfurlLinks,
          setUnfurlMedia: chat.setUnfurlMedia,
          setUsername: chat.setUsername,
          useAttachment: useAttachment(chat),
        };
      }
      case 'update': {
        chat.setText(text as string);

        return {
          json: chat.export.bind(chat),
          updateText: chat.updateText,
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setTs: chat.setTs,
          setAsUser: chat.setAsUser,
          setLinkNames: chat.setLinkNames,
          setParse: chat.setParse,
          useAttachment: useAttachment(chat),
        };
      }
      case 'delete': {
        return {
          json: chat.export.bind(chat),
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setTs: chat.setTs,
          setAsUser: chat.setAsUser,
        };
      }
      case 'postEphemeral': {
        chat.setText(text as string);

        return {
          json: chat.export.bind(chat),
          updateText: chat.updateText,
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setUser: chat.setUser,
          setAsUser: chat.setAsUser,
          setLinkNames: chat.setLinkNames,
          setParse: chat.setParse,
          setThreadTs: chat.setThreadTs,
          useAttachment: useAttachment(chat),
        };
      }
      case 'meMessage': {
        chat.setText(text as string);

        return {
          json: chat.export.bind(chat),
          updateText: chat.updateText,
          setToken: chat.setToken,
          setChannel: chat.setChannel,
        };
      }
      case 'getPermalink': {
        return {
          json: chat.export.bind(chat),
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setMessageTs: chat.setMessageTs,
        };
      }
      case 'unfurl': {
        return {
          json: chat.export.bind(chat),
          setToken: chat.setToken,
          setChannel: chat.setChannel,
          setTs: chat.setTs,
          setUnfurls: chat.setUnfurls,
          setUserAuthMessage: chat.setUserAuthMessage,
          setUserAuthRequired: chat.setUserAuthRequired,
          setUserAuthUrl: chat.setUserAuthUrl,
        };
      }
      default:
    }
  }
}

export const useChat = UseChat.fn;
