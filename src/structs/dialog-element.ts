import {DialogElementType} from '../type-aliases';

export abstract class DialogElement {
  abstract type: DialogElementType;

  optional?: boolean;

  /**
   *
   * @param label initial label
   * @param name initial name
   */
  constructor(public label: string, public name: string) {}

  updateLabel = (cb: (currentLabel: string) => string): void => {
    this.label = cb(this.label);
  };

  updateName = (cb: (currentName: string) => string): void => {
    this.name = cb(this.name);
  };

  setOptional = (value: boolean) => {
    this.optional = value;
  };
}
