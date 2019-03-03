import {ActionConfirm} from '../structs/slack/action-confirm';
import {ActionButton} from '../structs/slack';

export const useConfirm = (button: ActionButton) => (text: string) => {
  const confirm = new ActionConfirm(text);

  button.setConfirm(confirm);

  return {
    updateText: confirm.updateText,
    setTitle: confirm.setTitle,
    setOkText: confirm.setOkText,
    setDismissText: confirm.setDismissText,
  };
};
