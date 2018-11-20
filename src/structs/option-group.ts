import {Option} from './option';

type Text<P> = P extends 'text' ? string : never;
type Label<P> = P extends 'label' ? string : never;

export class OptionGroup<
  P extends 'text' | 'label',
  O extends Option<P> = Option<P>
> {
  text!: Text<P>;
  label!: Label<P>;
  options?: O[];

  constructor(propName: P, propValue: string) {
    this[propName] = propValue;
  }

  updateText = (cb: (text: Text<P>) => Text<P>): void => {
    this.text = cb(this.text);
  };

  updateLabel = (cb: (label: Label<P>) => Label<P>): void => {
    this.label = cb(this.label);
  };

  addOption = (option: O): void => {
    if (!Array.isArray(this.options)) {
      this.options = [];
    }

    this.options.push(option);
  };
}
