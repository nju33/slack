import {DialogElement} from './dialog-element';

export class Dialog {
  state?: string;
  submitLabel?: string;
  notifyOnCancel?: boolean;
  elements?: DialogElement[];

  constructor(public callbackId: string, public title: string) {}

  updateCallbackId = (cb: (callbackId: string) => string): void => {
    this.callbackId = cb(this.callbackId);
  };

  updateTitle = (cb: (title: string) => string): void => {
    this.title = cb(this.title);
  };

  setState = (value: string): void => {
    this.state = value;
  };

  /**
   * defaults `submit`
   */
  setSubmitLabel = (value: string): void => {
    this.submitLabel = value;
  };

  setNotifyOnCancel = (value: boolean): void => {
    this.notifyOnCancel = value;
  };

  addElement = (element: DialogElement): void => {
    if (!Array.isArray(this.elements)) {
      this.elements = [];
    }

    this.elements.push(element);
  };
}
