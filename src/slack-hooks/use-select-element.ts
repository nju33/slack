import {Dialog, DialogSelectElement} from '../structs/slack';
import {useSelectedOption} from './use-selected-option';
import {useOption} from './use-option';
import {useOptionGroup} from './use-option-group';

export const useSelectElement = (dialog: Dialog) => (
  label: string,
  name: string,
) => {
  const element = new DialogSelectElement(label, name);

  dialog.addElement(element);

  return {
    setOptional: element.setOptional,
    setDataSource: element.setDataSource,
    setMinQueryLength: element.setMinQueryLength,
    useSelectedOption: useSelectedOption(element),
    useOption: useOption(element, 'label'),
    useOptionGroup: useOptionGroup(element, 'label'),
  };
};
