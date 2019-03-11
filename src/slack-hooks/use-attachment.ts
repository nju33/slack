import {Attachment, Chat} from '../structs/slack';
import {useField} from './use-field';
import {useButton} from './use-button';
import {useSelect} from './use-select';
import {useListener} from './use-listener';

export const useAttachment = (chat: Chat) => (
  callbackId: string,
  text = '',
) => {
  const attachment = new Attachment(callbackId);

  chat.addAttachment(attachment);
  attachment.text = text;

  return {
    updateText: attachment.updateText,
    setFallback: attachment.setFallback,
    setColor: attachment.setColor,
    setPretext: attachment.setPretext,
    setAuthorName: attachment.setAuthorName,
    setAuthorLink: attachment.setAuthorLink,
    setAuthorIcon: attachment.setAuthorIcon,
    setTitle: attachment.setTitle,
    setTitleLink: attachment.setTitleLink,
    setImageUrl: attachment.setImageUrl,
    setThumbUrl: attachment.setThumbUrl,
    setFooter: attachment.setFooter,
    setFooterIcon: attachment.setFooterIcon,
    setTs: attachment.setTs,
    setAttachmentType: attachment.setAttachmentType,
    useField: useField(attachment),
    useButton: useButton(attachment),
    useSelect: useSelect(attachment),
    useListener: useListener(attachment),
  };
};
