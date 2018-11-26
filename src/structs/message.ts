import {applyMixins} from './apply-mixins';
import {Dialog} from './dialog';
import {Attachment} from '.';
import {Exportable} from './exportable';

export type ParseType = 'full' | 'none';

// tslint:disable-next-line:no-namespace
export class Message implements Exportable {
  token?: string;
  channel?: string;
  ts?: string;
  asUser?: boolean;
  iconEmoji?: string;
  iconUrl?: string;
  linkNames?: boolean;
  mrkdwn?: boolean;
  parse?: ParseType;
  replyBroadcast?: boolean;
  threadTs?: string;
  unfurlLinks?: boolean;
  unfurlMedia?: boolean;
  username?: string;

  triggerId?: string;
  dialog?: Dialog;

  attachments?: Attachment[];

  constructor(public text: string) {}

  export!: Exportable['export'];

  updateText = (cb: (text: string) => string): void => {
    this.text = cb(this.text);
  };

  setToken = (value: string): void => {
    this.token = value;
  };

  setChannel = (value: string): void => {
    this.channel = value;
  };

  setTs = (value: string): void => {
    this.ts = value;
  };

  setAsUser = (value: boolean): void => {
    this.asUser = value;
  };

  setIconEmoji = (value: string): void => {
    this.iconEmoji = value;
  };

  setIconUrl = (value: string): void => {
    this.iconUrl = value;
  };

  setLinkNames = (value: boolean): void => {
    this.linkNames = value;
  };

  setMrkdwn = (value: boolean): void => {
    this.mrkdwn = value;
  };

  setParse = (value: ParseType): void => {
    this.parse = value;
  };

  setReplyBroadcast = (value: boolean): void => {
    this.replyBroadcast = value;
  };

  /**
   * @param value `'1234567890.123456'`
   */
  setThreadTs = (value: string): void => {
    this.threadTs = value;
  };

  setUnfurlLinks = (value: boolean): void => {
    this.unfurlLinks = value;
  };

  setUnfurlMedia = (value: boolean): void => {
    this.unfurlMedia = value;
  };

  setUsername = (value: string): void => {
    this.username = value;
  };

  setTriggerId = (value: string): void => {
    this.triggerId = value;
  };

  setDialog = (dialog: Dialog): void => {
    this.dialog = dialog;
  };

  addAttachment = (attachment: Attachment): void => {
    if (!Array.isArray(this.attachments)) {
      this.attachments = [];
    }

    this.attachments.push(attachment);
  };
}

applyMixins(Message, [Exportable]);