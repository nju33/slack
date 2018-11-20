import {Message, Dialog} from '../structs';
import {useTextElement} from './use-text-element';
import {useTextareaElement} from './use-textarea-element';
import {useSelectElement} from './use-select-element';

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
    useTextElement: useTextElement(dialog),
    useTextareaElement: useTextareaElement(dialog),
    useSelectElement: useSelectElement(dialog),
  };
};
