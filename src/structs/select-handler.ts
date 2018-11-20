import {OptionLabel} from '../type-aliases';
import {SelectedOption} from './selected-option';
import {Option} from './option';
import {OptionGroup} from './option-group';

export interface SelectHandler<P extends OptionLabel> {
  selectedOptions?: SelectedOption[];
  options?: Option<P>[];
  optionGroups?: OptionGroup<P>[];

  addSelectedOption(value: SelectedOption): void;
  addOption(value: Option<P>): void;
  addOptionGroup(value: OptionGroup<P>): void;
}
