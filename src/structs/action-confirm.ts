export class ActionConfirm {
  title?: string;
  okText?: string;
  dismissText?: string;

  constructor(public text: string) {}

  updateText = (cb: (text: string) => string): void => {
    this.text = cb(this.text);
  };

  setTitle = (value: string): void => {
    this.title = value;
  };

  setOkText = (value: string): void => {
    this.okText = value;
  };

  setDismissText = (value: string): void => {
    this.dismissText = value;
  };
}
