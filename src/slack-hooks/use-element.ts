import {DialogElement, Dialog} from '../structs';

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
    setType: element.setType,
    setSubtype: element.setSubtype,
    setOptional: element.setOptional,
    setHint: element.setHint,
    setMinLength: element.setMinLength,
    setMaxLength: element.setMaxLength,
  };
};
