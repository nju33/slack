export class SelectedOption {
  constructor(public value: string | number) {}

  updateValue = (cb: (value: string | number) => string | number) => {
    this.value = cb(this.value);
  };
}
