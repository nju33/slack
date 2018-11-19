export type DialogElementType = 'text' | 'textarea' | 'select';

export type DialogElementSubtype = 'email' | 'number' | 'tel' | 'url';

export type DialogSelectElementDataSource =
  | 'users'
  | 'channels'
  | 'conversations'
  | 'external'
  | 'static';

export interface DialogSelectElementOption {
  label: string;
  value: string;
}

export interface DialogSelectElementOptionGroup {
  label: string;
  options: DialogSelectElementOption[];
}

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
  selectedOptions?: DialogSelectElementOption[];
  options?: DialogSelectElementOption[];
  optionGroups?: DialogSelectElementOptionGroup[];

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

  setSelectedOptions = (value: DialogSelectElementOption[]) => {
    if (this.isSelectType()) {
      this.selectedOptions = value;
    }
  };

  setOptions = (value: DialogSelectElementOption[]) => {
    if (this.isSelectType()) {
      this.options = value;
    }
  };

  setOptionGroups = (value: DialogSelectElementOptionGroup[]) => {
    if (this.isSelectType()) {
      this.optionGroups = value;
    }
  };
}
