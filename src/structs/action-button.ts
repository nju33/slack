import {ActionConfirm} from './action-confirm';
import {ButtonStyle} from './../type-aliases';

export class ActionButton {
  readonly type = 'button';
  style?: ButtonStyle;
  confirm?: ActionConfirm;

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

  setStyle = (value: ButtonStyle): void => {
    this.style = value;
  };

  setConfirm = (value: ActionConfirm): void => {
    this.confirm = value;
  };
}
