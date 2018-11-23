import {DialogTextareaElement, Dialog} from '../structs';

export const useTextareaElement = (dialog: Dialog) => (
  label: string,
  name: string,
  value: string,
) => {
  const element = new DialogTextareaElement(label, name, value);

  dialog.addElement(element);

  return {
    updateLabel: element.updateLabel,
    updateName: element.updateName,
    updateValue: element.updateValue,
    setOptional: element.setOptional,
    setSubtype: element.subtype,
    setHint: element.setHint,
    setMinLength: element.setMinLength,
    setMaxLength: element.setMaxLength,
    setPlaceholder: element.setPlaceholder,
  };
};
