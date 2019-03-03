import {Attachment, AttachmentField} from '../structs/slack';

export const useField = (attachment: Attachment) => (
  title: string,
  value: string,
) => {
  const field = new AttachmentField(title, value);

  attachment.addField(field);

  return {
    updateTitle: field.updateTitle,
    updateValue: field.updateValue,
    setShort: field.setShort,
  };
};
