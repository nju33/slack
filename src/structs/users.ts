import {applyMixins} from './apply-mixins';
import {Exportable} from './exportable';

export type ParseType = 'full' | 'none';

export class Users implements Exportable {
  name?: string;
  profile?: string;
  user?: string;
  value?: string;
  export!: Exportable['export'];

  readonly setName = (value: string) => {
    this.name = value;
  };

  readonly setProfile = (value: string) => {
    this.profile = value;
  };

  readonly setUser = (value: string) => {
    this.user = value;
  };

  readonly setValue = (value: string) => {
    this.value = value;
  };
}

applyMixins(Users, [Exportable]);
