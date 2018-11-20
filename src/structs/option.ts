import {OptionLabel} from '../type-aliases';

type Text<P> = P extends 'text' ? string : never;
type Label<P> = P extends 'label' ? string : never;

export class Option<P extends OptionLabel> {
  text!: Text<P>;
  label!: Label<P>;

  constructor(propName: P, propValue: string, public value: string | number) {
    this[propName] = propValue;
  }

  updateText = (cb: (text: Text<P>) => Text<P>): void => {
    this.text = cb(this.text);
  };

  updateLabel = (cb: (label: Label<P>) => Label<P>): void => {
    this.label = cb(this.label);
  };

  updateValue = (cb: (value: string | number) => string | number): void => {
    this.value = cb(this.value);
  };
}
