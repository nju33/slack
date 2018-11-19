export class AttachmentField {
  short?: boolean;

  constructor(public title: string, public value: string) {}

  updateTitle = (cb: (title: string) => string): void => {
    this.title = cb(this.title);
  };

  updateValue = (cb: (value: string) => string): void => {
    this.value = cb(this.value);
  };

  setShort = (value: boolean) => {
    this.short = value;
  };
}
