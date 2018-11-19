export class DialogOption {
  constructor(public label: string, public value: string) {}

  updateLabel = (cb: (label: string) => string): void => {
    this.label = cb(this.label);
  };

  updateValue = (cb: (value: string) => string): void => {
    this.value = cb(this.value);
  };
}