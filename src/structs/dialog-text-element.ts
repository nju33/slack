import {DialogInput} from './dialog-input';
import {DialogElementType} from '../type-aliases';

export class DialogTextElement extends DialogInput {
  type = 'text' as DialogElementType;
}