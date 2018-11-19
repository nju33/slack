import {DialogElement} from '../structs';
import {useSelectedOption} from './use-selected-option';
import {useOption} from './use-option';
import {useOptionGroup} from './use-option-group';

export const useSelectElement = (element: DialogElement) => () => {
  element.setType('select');

  return {
    setDataSource: element.setDataSource,
    setMinQueryLength: element.setMinQueryLength,
    useSelectedOption: useSelectedOption(element),
    useOption: useOption(element),
    useOptionGroup: useOptionGroup(element),
  };
};
