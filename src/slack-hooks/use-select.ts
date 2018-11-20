import {Attachment, ActionSelect} from '../structs';
import {useOptionGroup} from './use-option-group';
import {useOption} from './use-option';
import {useSelectedOption} from './use-selected-option';

export const useSelect = (attachment: Attachment) => (
  name: string,
  text: string,
) => {
  const select = new ActionSelect(name, text);

  attachment.addAction(select);

  return {
    updateName: select.updateName,
    updateText: select.updateText,
    setDataSource: select.setDataSource,
    useSelectedOption: useSelectedOption(select),
    useOption: useOption(select, 'text'),
    useOptionGroup: useOptionGroup(select, 'text'),
  };
};
