import {DialogSelectElement, ActionSelect} from '../structs';
import {useOption} from './use-option';
import {OptionGroup} from '../structs/option-group';
import {OptionLabel} from '../type-aliases';

export const useOptionGroup = <P extends OptionLabel>(
  element: ActionSelect<P> | DialogSelectElement<P>,
  propName: P,
) => (propValue: string) => {
  const optionGroup = new OptionGroup(propName, propValue);

  element.addOptionGroup(optionGroup);

  return {
    useOption: useOption(optionGroup, propName),
  };
};
