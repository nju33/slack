import {DialogElement} from '../structs';

export const useTextareaElement = (element: DialogElement) => () => {
  element.setType('textarea');

  return {
    setSubtype: element.subtype,
    setHint: element.setHint,
    setMinLength: element.setMinLength,
    setMaxLength: element.setMaxLength,
    setPlaceholder: element.setPlaceholder,
  };
};
