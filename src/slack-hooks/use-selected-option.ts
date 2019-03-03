import {SelectedOption} from '../structs/slack/selected-option';
import {ActionSelect, DialogSelectElement} from '../structs/slack';

export const useSelectedOption = (
  select: ActionSelect<any> | DialogSelectElement<any>,
) => (value: string | number) => {
  const selectedOption = new SelectedOption(value);

  select.addSelectedOption(selectedOption);

  return {
    updateValue: selectedOption.updateValue,
  };
};
