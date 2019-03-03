import {DialogElement} from './dialog-element';
import {
  DialogElementType,
  OptionDataSource,
  OptionLabel,
} from '../../type-aliases';
import {SelectHandler} from './select-handler';

type H<P extends OptionLabel> = SelectHandler<P>;

export class DialogSelectElement<P extends OptionLabel = 'label'>
  extends DialogElement
  implements H<P> {
  type = 'select' as DialogElementType;

  dataSource?: OptionDataSource;
  minQueryLength?: number;
  selectedOptions: H<P>['selectedOptions'];
  options: H<P>['options'];
  optionGroups: H<P>['optionGroups'];

  setDataSource = (value: OptionDataSource) => {
    this.dataSource = value;
  };

  setMinQueryLength = (value: number) => {
    this.minQueryLength = value;
  };

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
