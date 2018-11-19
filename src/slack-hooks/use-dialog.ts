import {Message, Dialog} from '../structs';

export const useDialog = (message: Message) => (
  triggerId: string,
  callbackId: string,
  title: string,
) => {
  const dialog = new Dialog(callbackId, title);

  message.setTriggerId(triggerId);
  message.setDialog(dialog);

  return {
    setState: dialog.setState,
    setSubmitLabel: dialog.setSubmitLabel,
    setNotifyOnCancel: dialog.setNotifyOnCancel,
  };
};
