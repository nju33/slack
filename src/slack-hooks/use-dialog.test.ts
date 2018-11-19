import {Message, Dialog} from '../structs';
import {useDialog} from './use-dialog';

describe('useElement', () => {
  let message: Message;
  const dialog = () => useDialog(message)('triggerId', 'callbackId', 'title');

  beforeEach(() => {
    message = new Message('text');
  });

  test('returns', () => {
    const {
      updateCallbackId,
      updateTitle,
      setState,
      setSubmitLabel,
      setNotifyOnCancel,
      useElement,
    } = dialog();

    expect(updateCallbackId).toBeInstanceOf(Function);
    expect(updateTitle).toBeInstanceOf(Function);
    expect(setState).toBeInstanceOf(Function);
    expect(setSubmitLabel).toBeInstanceOf(Function);
    expect(setNotifyOnCancel).toBeInstanceOf(Function);
    expect(useElement).toBeInstanceOf(Function);

    expect(message.dialog).toBeInstanceOf(Dialog);
  });

  test('updateCallbackId', () => {
    const {updateCallbackId} = dialog();

    // tslint:disable-next-line:early-exit
    if (message.dialog !== undefined) {
      expect(message.dialog.callbackId).toBe('callbackId');
      updateCallbackId(callbackId => `updated-${callbackId}`);
      expect(message.dialog.callbackId).toBe('updated-callbackId');
    }
  });

  test('updateTitle', () => {
    const {updateTitle} = dialog();

    // tslint:disable-next-line:early-exit
    if (message.dialog !== undefined) {
      expect(message.dialog.title).toBe('title');
      updateTitle(title => `updated-${title}`);
      expect(message.dialog.title).toBe('updated-title');
    }
  });

  test('setState', () => {
    const {setState} = dialog();

    // tslint:disable-next-line:early-exit
    if (message.dialog !== undefined) {
      expect(message.dialog.state).toBeUndefined();
      setState('state');
      expect(message.dialog.state).toBe('state');
    }
  });

  test('setSubmitLabel', () => {
    const {setSubmitLabel} = dialog();

    // tslint:disable-next-line:early-exit
    if (message.dialog !== undefined) {
      expect(message.dialog.submitLabel).toBeUndefined();
      setSubmitLabel('submitLabel');
      expect(message.dialog.submitLabel).toBe('submitLabel');
    }
  });

  test('setNotifyOnCancel', () => {
    const {setNotifyOnCancel} = dialog();

    // tslint:disable-next-line:early-exit
    if (message.dialog !== undefined) {
      expect(message.dialog.notifyOnCancel).toBeUndefined();
      setNotifyOnCancel(true);
      expect(message.dialog.notifyOnCancel).toBeTruthy();
    }
  });
});
