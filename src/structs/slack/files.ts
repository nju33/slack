import {applyMixins} from './apply-mixins';
import {Exportable} from './exportable';

export class Files implements Exportable {
  token?: string;
  channels?: string;
  content?: string;
  file?: any;
  filename?: string;
  filetype?: string;
  initialComment?: string;
  threadTs?: string;
  title?: string;

  export!: Exportable['export'];

  readonly setToken = (value: string): void => {
    this.token = value;
  };

  readonly setChannels = (...channels: string[]): void => {
    this.channels = channels.join(',');
  };

  readonly setContent = (value: string): void => {
    this.content = value;
  };

  /**
   * @todo
   */
  // tslint:disable-next-line:no-empty
  readonly setFile = (_value: string): void => {};

  readonly setFilename = (value: string): void => {
    this.filename = value;
  };

  /**
   * @see (@link https://api.slack.com/types/file#file_types)
   */
  readonly setFiletype = (value: string): void => {
    this.filetype = value;
  };

  readonly setInitialComment = (value: string): void => {
    this.initialComment = value;
  };

  readonly setThreadTs = (value: string): void => {
    this.threadTs = value;
  };

  readonly setTitle = (value: string): void => {
    this.title = value;
  };
}

applyMixins(Files, [Exportable]);
