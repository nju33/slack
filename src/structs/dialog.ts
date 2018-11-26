import {DialogElement} from './dialog-element';
import {Exportable} from './exportable';
import {applyMixins} from './apply-mixins';

export class Dialog implements Exportable {
  dialog: {
    callbackId: string;
    title: string;
    state?: string;
    submitLabel?: string;
    notifyOnCancel?: boolean;
    elements?: DialogElement[];
  };

  constructor(public triggerId: string, callbackId: string, title: string) {
    this.dialog = {
      callbackId,
      title,
    };
  }

  export!: Exportable['export'];

  readonly updateCallbackId = (cb: (callbackId: string) => string): void => {
    this.dialog.callbackId = cb(this.dialog.callbackId);
  };

  readonly updateTitle = (cb: (title: string) => string): void => {
    this.dialog.title = cb(this.dialog.title);
  };

  readonly setState = (value: string): void => {
    this.dialog.state = value;
  };

  /**
   * defaults `submit`
   */
  readonly setSubmitLabel = (value: string): void => {
    this.dialog.submitLabel = value;
  };

  readonly setNotifyOnCancel = (value: boolean): void => {
    this.dialog.notifyOnCancel = value;
  };

  readonly addElement = (element: DialogElement): void => {
    if (!Array.isArray(this.dialog.elements)) {
      this.dialog.elements = [];
    }

    this.dialog.elements.push(element);
  };
}

applyMixins(Dialog, [Exportable]);
