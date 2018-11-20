export class ActionButton {
  readonly type = 'button';

  constructor(
    public name: string,
    public text: string,
    public value: string | number,
  ) {}

  updateName = (cb: (name: string) => string): void => {
    this.name = cb(this.name);
  };

  updateText = (cb: (text: string) => string): void => {
    this.text = cb(this.text);
  };

  updateValue = (cb: (value: string | number) => string | number): void => {
    this.value = cb(this.value);
  };
}
