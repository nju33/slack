import {Attachment, ActionButton} from '../structs/slack';
import {useConfirm} from './use-confirm';

export const useButton = (attachment: Attachment) => (
  name: string,
  text: string,
  value: string | number,
) => {
  const button = new ActionButton(name, text, value);

  attachment.addAction(button);

  return {
    updateName: button.updateName,
    updateText: button.updateText,
    updateValue: button.updateValue,
    setStyle: button.setStyle,
    useConfirm: useConfirm(button),
  };
};
