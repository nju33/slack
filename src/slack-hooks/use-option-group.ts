import {DialogElement, DialogOptionGroup} from '../structs';
import {useOption} from './use-option';

export const useOptionGroup = (element: DialogElement) => (
  label: string,
) => {
  const optionGroup = new DialogOptionGroup(label);

  element.addOptionGroup(optionGroup);

  return {
    useOption: useOption(optionGroup),
  };
};
