import {Dialog} from '../structs';
import {useElement} from './use-element';

describe('useElement', () => {
  let dialog: Dialog;
  const element = () => useElement(dialog)('label', 'name', 'value');

  beforeEach(() => {
    dialog = new Dialog('callbackId', 'title');
  });

  test('returns', () => {
    const {
      updateLabel,
      updateName,
      updateValue,
      setSubtype,
      setOptional,
      setHint,
      setMinLength,
      setMaxLength,
    } = useElement(dialog)('label', 'name', 'value');

    expect(updateLabel).toBeInstanceOf(Function);
    expect(updateName).toBeInstanceOf(Function);
    expect(updateValue).toBeInstanceOf(Function);
    expect(setSubtype).toBeInstanceOf(Function);
    expect(setOptional).toBeInstanceOf(Function);
    expect(setHint).toBeInstanceOf(Function);
    expect(setMinLength).toBeInstanceOf(Function);
    expect(setMaxLength).toBeInstanceOf(Function);

    expect(Array.isArray(dialog.elements)).toBeTruthy();
  });

  test('updateLabel', () => {
    const {updateLabel} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].label).toBe('label');
      updateLabel(label => `updated-${label}`);
      expect(dialog.elements[0].label).toBe('updated-label');
    }
  });

  test('updateName', () => {
    const {updateName} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].name).toBe('name');
      updateName(name => `updated-${name}`);
      expect(dialog.elements[0].name).toBe('updated-name');
    }
  });

  test('updateValue', () => {
    const {updateValue} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].value).toBe('value');
      updateValue(value => `updated-${value}`);
      expect(dialog.elements[0].value).toBe('updated-value');
    }
  });

  test('setSubtype', () => {
    const {setSubtype} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].subtype).toBeUndefined();
      setSubtype('email');
      expect(dialog.elements[0].subtype).toBe('email');
    }
  });

  test('setOptional', () => {
    const {setOptional} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].optional).toBeUndefined();
      setOptional(true);
      expect(dialog.elements[0].optional).toBeTruthy();
    }
  });

  test('setHint', () => {
    const {setHint} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].hint).toBeUndefined();
      setHint('hint');
      expect(dialog.elements[0].hint).toBe('hint');
    }
  });

  test('setMinLength', () => {
    const {setMinLength} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].minLength).toBeUndefined();
      setMinLength(5);
      expect(dialog.elements[0].minLength).toBe(5);
    }
  });

  test('setMaxLength', () => {
    const {setMaxLength} = element();
    // tslint:disable-next-line:early-exit
    if (dialog.elements !== undefined && Array.isArray(dialog.elements)) {
      expect(dialog.elements[0].maxLength).toBeUndefined();
      setMaxLength(10);
      expect(dialog.elements[0].maxLength).toBe(10);
    }
  });
});
