const serveoSubdomainKey = 'serveo-subdomain';

export class Query {
  constructor(
    public query: {
      'serveo-subdomain'?: string;
    },
  ) {}

  get serveoSubdomain(): string | false {
    const serveoSubdomain = this.query[serveoSubdomainKey];
    if (serveoSubdomain !== undefined) {
      return serveoSubdomain;
    }

    return false;
  }
}
