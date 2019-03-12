import {Attachment, Chat} from '../structs/slack';
import {useField} from './use-field';
import {useButton} from './use-button';
import {useSelect} from './use-select';
import {useListener} from './use-listener';

interface UseAttachmentResults {
  updateText: Attachment['updateText'];
  setFallback: Attachment['setFallback'];
  setColor: Attachment['setColor'];
  setPretext: Attachment['setPretext'];
  setAuthorName: Attachment['setAuthorName'];
  setAuthorLink: Attachment['setAuthorLink'];
  setAuthorIcon: Attachment['setAuthorIcon'];
  setTitle: Attachment['setTitle'];
  setTitleLink: Attachment['setTitleLink'];
  setImageUrl: Attachment['setImageUrl'];
  setThumbUrl: Attachment['setThumbUrl'];
  setFooter: Attachment['setFooter'];
  setFooterIcon: Attachment['setFooterIcon'];
  setTs: Attachment['setTs'];
  setAttachmentType: Attachment['setAttachmentType'];
  useField: ReturnType<typeof useField>;
  useButton: ReturnType<typeof useButton>;
  useSelect: ReturnType<typeof useSelect>;
  useListener: ReturnType<typeof useListener>;
}

interface UseAttachment {
  (callbackId: string, text?: string): UseAttachmentResults & {
    json: Attachment['export'];
  };
  (chat: Chat): (callbackId: string, text?: string) => UseAttachmentResults;
}

export const useAttachment: UseAttachment = ((arg1: unknown, arg2: unknown) => {
  if (arg1 instanceof Chat) {
    const chat = arg1 as Chat;

    return (callbackId: string, text = '') => {
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
        useListener: useListener(attachment)
      };
    };
  }

  {
    const [callbackId, text] = [arg1 as string, (arg2 as string) || ''];
    const attachment = new Attachment(callbackId);
    attachment.text = text;

    return {
      json: attachment.export.bind(attachment),
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
      useListener: useListener(attachment)
    };
  }
}) as any;
