import {Message, Attachment} from '../structs';
import {useField} from './use-field';
import {useButton} from './use-button';
import {useSelect} from './use-select';

export const useAttachment = (message: Message) => (callbackId: string) => {
  const attachment = new Attachment(callbackId);

  message.addAttachment(attachment);

  return {
    setFallback: attachment.setFallback,
    setColor: attachment.setColor,
    setPretext: attachment.setPretext,
    setAuthorName: attachment.setAuthorName,
    setAuthorLink: attachment.setAuthorLink,
    setAuthorIcon: attachment.setAuthorIcon,
    setTitle: attachment.setTitle,
    setTitleLink: attachment.setTitleLink,
    setText: attachment.setText,
    setImageUrl: attachment.setImageUrl,
    setThumbUrl: attachment.setThumbUrl,
    setFooter: attachment.setFooter,
    setFooterIcon: attachment.setFooterIcon,
    setTs: attachment.setTs,
    setAttachmentType: attachment.setAttachmentType,
    useField: useField(attachment),
    useButton: useButton(attachment),
    useSelect: useSelect(attachment),
  };
};
