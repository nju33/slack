/// <reference types="node" />

import {resolve, URLSearchParams} from 'url';
import fetch from 'node-fetch';

export class ServeoTransfer {
  origin: string;
  requestPath: string;

  constructor(public subdomain: string, requestPath: string) {
    this.subdomain = subdomain;
    this.origin = `https://${this.subdomain}.serveo.net`;
    this.requestPath = resolve(this.origin, requestPath);
  }

  /**
   * whether `/_status` is live
   */
  async ok() {
    const res = await fetch(resolve(this.origin, '_status'));
    if (res.status === 502) {
      return false;
    }

    return true;
  }

  async transfer(bodyObject: object) {
    const body = new URLSearchParams();
    Object.keys(bodyObject).forEach(key => {
      body.append(key, (bodyObject as {[x: string]: any})[key]);
    });

    return fetch(this.requestPath, {
      method: 'POST',
      body,
    }).then(res => res.json());
  }
}
