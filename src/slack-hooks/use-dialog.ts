import {Dialog} from '../structs/slack';
import {useTextElement} from './use-text-element';
import {useTextareaElement} from './use-textarea-element';
import {useSelectElement} from './use-select-element';

export const useDialog = (
  triggerId: string,
  callbackId: string,
  title: string,
) => {
  const dialog = new Dialog(triggerId, callbackId, title);

  return {
    json: dialog.export.bind(dialog),
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
