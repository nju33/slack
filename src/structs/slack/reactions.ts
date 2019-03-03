import {applyMixins} from './apply-mixins';
import {Exportable} from './exportable';
import {PageGettable} from './page-gettable';

export class Reactions implements Exportable, PageGettable {
  token?: string;
  name?: string;
  channel?: string;
  full?: boolean;
  timestamp?: string;
  count?: number;
  page?: number;
  user?: string;

  export!: Exportable['export'];

  cursor!: PageGettable['cursor'];
  limit!: PageGettable['limit'];
  setCursor!: PageGettable['setCursor'];
  setLimit!: PageGettable['setLimit'];

  readonly setToken = (value: string): void => {
    this.token = value;
  };

  readonly setName = (value: string): void => {
    this.name = value;
  };

  readonly updateName = (cb: (name: string) => string): void => {
    this.name = cb(this.name as string);
  };

  readonly setChannel = (value: string): void => {
    this.channel = value;
  };

  readonly setFull = (value: boolean): void => {
    this.full = value;
  };

  readonly setTimestamp = (value: string): void => {
    this.timestamp = value;
  };

  readonly setCount = (value: number): void => {
    this.count = value;
  };

  readonly setPage = (value: number): void => {
    this.page = value;
  };

  readonly setUser = (value: string): void => {
    this.user = value;
  };
}

applyMixins(Reactions, [Exportable, PageGettable]);

