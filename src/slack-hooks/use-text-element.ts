import {DialogElement} from '../structs';

export const useTextElement = (element: DialogElement) => () => {
  element.setType('text');

  return {
    setSubtype: element.setSubtype,
    setHint: element.setHint,
    setMinLength: element.setMinLength,
    setMaxLength: element.setMaxLength,
    setPlaceholder: element.setPlaceholder,
  };
};
