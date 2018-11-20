import {AttachmentField} from './attachment-field';
import {ActionButton} from './action-button';
import {ActionSelect} from './action-select';
import {OptionLabel} from '../type-aliases';

type ActionElement<P extends OptionLabel> = ActionButton | ActionSelect<P>;

export class Attachment<P extends OptionLabel = 'text'> {
  fallback?: string;
  color?: string;
  pretext?: string;
  authorName?: string;
  authorLink?: string;
  authorIcon?: string;
  title?: string;
  titleLink?: string;
  text?: string;
  fields?: AttachmentField[];
  imageUrl?: string;
  thumbUrl?: string;
  footer?: string;
  footerIcon?: string;
  ts?: number;
  attachmentType?: string;
  actions?: (ActionElement<P>)[];

  constructor(public callbackId: string) {}

  setFallback = (value: string): void => {
    this.fallback = value;
  };

  setColor = (value: string): void => {
    this.color = value;
  };

  setPretext = (value: string): void => {
    this.pretext = value;
  };

  setAuthorName = (value: string): void => {
    this.authorName = value;
  };

  setAuthorLink = (value: string): void => {
    this.authorLink = value;
  };

  setAuthorIcon = (value: string): void => {
    this.authorIcon = value;
  };

  setTitle = (value: string): void => {
    this.title = value;
  };

  setTitleLink = (value: string): void => {
    this.titleLink = value;
  };

  setText = (value: string): void => {
    this.text = value;
  };

  setImageUrl = (value: string): void => {
    this.imageUrl = value;
  };

  setThumbUrl = (value: string): void => {
    this.thumbUrl = value;
  };

  setFooter = (value: string): void => {
    this.footer = value;
  };

  setFooterIcon = (value: string): void => {
    this.footerIcon = value;
  };

  setTs = (value: number): void => {
    this.ts = value;
  };

  setAttachmentType = (value: string): void => {
    this.attachmentType = value;
  };

  addField = (field: AttachmentField): void => {
    if (!Array.isArray(this.fields)) {
      this.fields = [];
    }

    this.fields.push(field);
  };

  addAction = (actionElement: ActionElement<P>) => {
    if (!Array.isArray(this.actions)) {
      this.actions = [];
    }

    this.actions.push(actionElement);
  };
}
