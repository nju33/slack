export class Query {
  constructor(public query: object) {}

  hasServeoSubdomain() {
    return Object.prototype.hasOwnProperty.call(this.query, 'serveo-subdomain');
  }
}
