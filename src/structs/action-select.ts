import {OptionLabel} from '../type-aliases';
import {SelectHandler} from './select-handler';
import {OptionDataSource} from './../type-aliases';

type H<P extends OptionLabel> = SelectHandler<P>;
export class ActionSelect<P extends OptionLabel> implements H<P> {
  readonly type = 'select';
  dataSource?: OptionDataSource;

  selectedOptions: H<P>['selectedOptions'];
  options: H<P>['options'];
  optionGroups: H<P>['optionGroups'];

  constructor(public name: string, public text: string) {}

  updateName = (cb: (name: string) => string): void => {
    this.name = cb(this.name);
  };

  updateText = (cb: (text: string) => string): void => {
    this.text = cb(this.text);
  };

  setDataSource = (value: OptionDataSource): void => {
    this.dataSource = value;
  }

  addSelectedOption: H<P>['addSelectedOption'] = value => {
    if (!Array.isArray(this.selectedOptions)) {
      this.selectedOptions = [];
    }

    this.selectedOptions.push(value);
  };

  addOption: H<P>['addOption'] = value => {
    if (!Array.isArray(this.options)) {
      this.options = [];
    }

    this.options.push(value);
  };

  addOptionGroup: H<P>['addOptionGroup'] = value => {
    if (!Array.isArray(this.optionGroups)) {
      this.optionGroups = [];
    }

    this.optionGroups.push(value);
  };
}
