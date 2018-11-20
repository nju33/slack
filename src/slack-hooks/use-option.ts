import {
  ActionSelect,
  Option,
  OptionGroup,
  DialogSelectElement,
} from '../structs';
import {OptionLabel} from '../type-aliases';

export const useOption = <P extends OptionLabel>(
  parent: ActionSelect<P> | DialogSelectElement<P> | OptionGroup<P>,
  propName: P,
) => (propValue: string, value: string | number) => {
  const option = new Option(propName, propValue, value);

  parent.addOption(option);

  return {
    updateLabel: option.updateLabel,
    updateValue: option.updateValue,
  };
};
