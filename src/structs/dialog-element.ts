import {DialogOption} from './dialog-option';
import {DialogOptionGroup} from './dialog-option-group';

export type DialogElementType = 'text' | 'textarea' | 'select';

export type DialogElementSubtype = 'email' | 'number' | 'tel' | 'url';

export type DialogSelectElementDataSource =
  | 'users'
  | 'channels'
  | 'conversations'
  | 'external'
  | 'static';

export class DialogElement {
  type?: DialogElementType;
  optional?: boolean;

  subtype?: DialogElementSubtype;
  hint?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;

  dataSource?: DialogSelectElementDataSource;
  minQueryLength?: number;
  selectedOptions?: DialogOption[];
  options?: DialogOption[];
  optionGroups?: DialogOptionGroup[];

  /**
   *
   * @param label initial label
   * @param name initial name
   * @param value initial value
   */
  constructor(
    public label: string,
    public name: string,
    public value: string,
  ) {}

  private isSelectType() {
    return this.type === 'select';
  }

  updateLabel = (cb: (currentLabel: string) => string): void => {
    this.label = cb(this.label);
  };

  updateName = (cb: (currentName: string) => string): void => {
    this.name = cb(this.name);
  };

  updateValue = (cb: (currentValue: string) => string): void => {
    this.value = cb(this.value);
  };

  setOptional = (value: boolean) => {
    this.optional = value;
  };

  setType = (value: DialogElementType): void => {
    this.type = value;

    if (this.type === 'select') {
      delete this.subtype;
      delete this.hint;
      delete this.minLength;
      delete this.maxLength;
      delete this.placeholder;
    } else {
      delete this.dataSource;
      delete this.minQueryLength;
      delete this.selectedOptions;
      delete this.options;
      delete this.optionGroups;
    }
  };

  setSubtype = (value: DialogElementSubtype) => {
    if (!this.isSelectType()) {
      this.subtype = value;
    }
  };

  setHint = (value: string) => {
    if (!this.isSelectType()) {
      this.hint = value;
    }
  };

  setMinLength = (value: number): void => {
    if (!this.isSelectType()) {
      this.minLength = value;
    }
  };

  setMaxLength = (value: number): void => {
    if (!this.isSelectType()) {
      this.maxLength = value;
    }
  };

  setPlaceholder = (value: string): void => {
    if (!this.isSelectType()) {
      this.placeholder = value;
    }
  };

  setDataSource = (value: DialogSelectElementDataSource) => {
    if (this.isSelectType()) {
      this.dataSource = value;
    }
  };

  setMinQueryLength = (value: number) => {
    if (this.isSelectType()) {
      this.minQueryLength = value;
    }
  };

  addSelectedOption = (option: DialogOption) => {
    if (!Array.isArray(this.selectedOptions)) {
      this.selectedOptions = [];
    }

    this.selectedOptions.push(option);
  };

  addOption = (option: DialogOption) => {
    if (!Array.isArray(this.options)) {
      this.options = [];
    }

    this.options.push(option);
  };

  addOptionGroup = (optionGroup: DialogOptionGroup) => {
    if (!Array.isArray(this.optionGroups)) {
      this.optionGroups = [];
    }

    this.optionGroups.push(optionGroup);
  };
}
