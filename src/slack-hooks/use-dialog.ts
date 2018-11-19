import {Message, Dialog} from '../structs';
import {useElement} from './use-element';

export const useDialog = (message: Message) => (
  triggerId: string,
  callbackId: string,
  title: string,
) => {
  const dialog = new Dialog(callbackId, title);

  message.setTriggerId(triggerId);
  message.setDialog(dialog);

  return {
    updateCallbackId: dialog.updateCallbackId,
    updateTitle: dialog.updateTitle,
    setState: dialog.setState,
    setSubmitLabel: dialog.setSubmitLabel,
    setNotifyOnCancel: dialog.setNotifyOnCancel,
    useElement: useElement(dialog),
  };
};
