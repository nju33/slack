import {applyMixins} from './apply-mixins';
import {Attachment} from '.';
import {Exportable} from './exportable';

export type ParseType = 'full' | 'none';

export class Chat implements Exportable {
  token?: string;
  text?: string;
  channel?: string;
  messageTs?: string;
  ts?: string;
  asUser?: boolean;
  iconEmoji?: string;
  iconUrl?: string;
  linkNames?: boolean;
  mrkdwn?: boolean;
  parse?: ParseType;
  replyBroadcast?: boolean;
  threadTs?: string;
  unfurls?: string;
  unfurlLinks?: boolean;
  unfurlMedia?: boolean;
  user?: string;
  username?: string;
  userAuthMessage?: string;
  userAuthRequired?: boolean;
  userAuthUrl?: string;
  attachments?: Attachment[];

  export!: Exportable['export'];

  readonly setText = (value: string) => {
    this.text = value;
  };

  readonly updateText = (cb: (text: string) => string): void => {
    this.text = cb(this.text as string);
  };

  readonly setToken = (value: string): void => {
    this.token = value;
  };

  readonly setChannel = (value: string): void => {
    this.channel = value;
  };

  readonly setMessageTs = (value: string): void => {
    this.messageTs = value;
  };

  readonly setTs = (value: string): void => {
    this.ts = value;
  };

  readonly setAsUser = (value: boolean): void => {
    this.asUser = value;
  };

  readonly setIconEmoji = (value: string): void => {
    this.iconEmoji = value;
  };

  readonly setIconUrl = (value: string): void => {
    this.iconUrl = value;
  };

  readonly setLinkNames = (value: boolean): void => {
    this.linkNames = value;
  };

  readonly setMrkdwn = (value: boolean): void => {
    this.mrkdwn = value;
  };

  readonly setParse = (value: ParseType): void => {
    this.parse = value;
  };

  readonly setReplyBroadcast = (value: boolean): void => {
    this.replyBroadcast = value;
  };

  /**
   * @param value `'1234567890.123456'`
   */
  readonly setThreadTs = (value: string): void => {
    this.threadTs = value;
  };

  readonly setUnfurls = (value: string): void => {
    this.unfurls = value;
  };

  readonly setUnfurlLinks = (value: boolean): void => {
    this.unfurlLinks = value;
  };

  readonly setUnfurlMedia = (value: boolean): void => {
    this.unfurlMedia = value;
  };

  readonly setUser = (value: string): void => {
    this.user = value;
  };

  readonly setUsername = (value: string): void => {
    this.username = value;
  };

  readonly setUserAuthMessage = (value: string): void => {
    this.userAuthMessage = value;
  };

  readonly setUserAuthRequired = (value: boolean): void => {
    this.userAuthRequired = value;
  };

  readonly setUserAuthUrl = (value: string): void => {
    this.userAuthUrl = value;
  };

  readonly addAttachment = (attachment: Attachment): void => {
    if (!Array.isArray(this.attachments)) {
      this.attachments = [];
    }

    this.attachments.push(attachment);
  };
}

applyMixins(Chat, [Exportable]);
