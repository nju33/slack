import {DialogElement, DialogOption, DialogOptionGroup} from '../structs';

export const useOption = (parent: DialogElement | DialogOptionGroup) => (
  label: string,
  value: string,
) => {
  const option = new DialogOption(label, value);

  parent.addOption(option);

  return {
    updateLabel: option.updateLabel,
    updateValue: option.updateValue,
  };
};
