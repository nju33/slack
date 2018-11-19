import {DialogElement, Dialog} from '../structs';
import {useSelectElement} from './use-select-element';
import {useTextElement} from './use-text-element';
import {useTextareaElement} from './use-textarea-element';

/**
 * @param dialog dialog
 */
export const useElement = (dialog: Dialog) => (
  label: string,
  name: string,
  value: string,
) => {
  const element = new DialogElement(label, name, value);

  dialog.addElement(element);

  return {
    updateLabel: element.updateLabel,
    updateName: element.updateName,
    updateValue: element.updateValue,
    useTextElement: useTextElement(element),
    useTextareaElement: useTextareaElement(element),
    useSelectElement: useSelectElement(element),
  };
};
