import {DialogElement} from './dialog-element';
import {DialogElementType, DialogElementSubtype} from '../type-aliases';

export abstract class DialogInput extends DialogElement {
  abstract type: DialogElementType;

  subtype?: DialogElementSubtype;
  hint?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;

  constructor(input: string, name: string, public value: string) {
    super(input, name);
  }

  updateValue = (cb: (currentValue: string) => string): void => {
    this.value = cb(this.value);
  };

  setSubtype = (value: DialogElementSubtype) => {
    this.subtype = value;
  };

  setHint = (value: string) => {
    this.hint = value;
  };

  setMinLength = (value: number) => {
    this.minLength = value;
  };

  setMaxLength = (value: number) => {
    this.maxLength = value;
  };

  setPlaceholder = (value: string) => {
    this.placeholder = value;
  };
}
