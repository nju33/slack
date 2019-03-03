import fetch from 'node-fetch';
import {useChat} from '../slack-hooks/use-chat';

/**
 * Logging to slack
 */
export class Logger {
  /**
   * @param accessToken A oauth access token
   * @param channel A channel id
   */
  constructor(public accessToken: string, public channel: string) {}

  /**
   * Post message to `https://slack.com/api/chat.postMessage`
   */
  async postMessage(json: object): Promise<void> {
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(json),
    });
  }

  /**
   * Format value for the text param of chat.postMessage
   */
  formatValue(value: unknown): string {
    let text: string = '';
    if (typeof value === 'object' && value !== null) {
      text = JSON.stringify(value);
    } else if (typeof value !== 'string') {
      text = String(value);
    } else {
      text = value as string;
    }

    return text;
  }

  async log(value: unknown): Promise<void> {
    const text = this.formatValue(value);
    const {json, useAttachment} = useChat('postMessage', '');
    const {setText, setFooter} = useAttachment('');
    setText('');
    setFooter(text);

    await this.postMessage(json());
  }

  async info(value: unknown): Promise<void> {
    const text = this.formatValue(value);
    const {json, useAttachment} = useChat('postMessage', '');
    const {setText, setFooter, setColor} = useAttachment('');
    setText('');
    setFooter(text);
    setColor('#005caf');

    await this.postMessage(json());
  }

  async error(value: unknown): Promise<void> {
    const text = this.formatValue(value);
    const {json, useAttachment} = useChat('postMessage', '');
    const {setText, setFooter, setColor} = useAttachment('');
    setText('');
    setFooter(text);
    setColor('#cb1b45');

    await this.postMessage(json());
  }
}
