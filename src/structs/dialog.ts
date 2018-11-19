import {DialogElement} from './dialog-element';

export class Dialog {
  state?: string;
  submitLabel?: string;
  notifyOnCancel?: boolean;
  elements?: DialogElement[];

  constructor(public callbackId: string, public title: string) {}

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
