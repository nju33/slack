import {DialogTextElement, Dialog} from '../structs';

export const useTextElement = (dialog: Dialog) => (
  label: string,
  name: string,
  value: string,
) => {
  const element = new DialogTextElement(label, name, value);

  dialog.addElement(element);

  return {
    updateLabel: element.updateLabel,
    updateName: element.updateName,
    updateValue: element.updateValue,
    setSubtype: element.setSubtype,
    setHint: element.setHint,
    setMinLength: element.setMinLength,
    setMaxLength: element.setMaxLength,
    setPlaceholder: element.setPlaceholder,
  };
};
