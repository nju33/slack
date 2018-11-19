import {DialogElement, DialogOption} from '../structs';

export const useSelectedOption = (dialog: DialogElement) => (
  label: string,
  value: string,
) => {
  const option = new DialogOption(label, value);

  dialog.addSelectedOption(option);

  return {
    updateLabel: option.updateLabel,
    updateValue: option.updateValue,
  };
};
