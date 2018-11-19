import {DialogOption} from './dialog-option';

export class DialogOptionGroup {
  options?: DialogOption[];

  constructor(public label: string) {}

  updateLabel = (cb: (label: string) => string): void => {
    this.label = cb(this.label);
  };

  addOption = (option: DialogOption) => {
    if (!Array.isArray(this.options)) {
      this.options = [];
    }

    this.options.push(option);
  };
}
