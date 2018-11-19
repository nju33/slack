import {AttachmentField} from './attachment-field';

export class Attachment {
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

  addField = (field: AttachmentField): void => {
    if (!Array.isArray(this.fields)) {
      this.fields = [];
    }

    this.fields.push(field);
  };
}
