import snakecaseKeys from 'snakecase-keys';

export class Exportable {
  export(snakecaseKey = true): any {
    const json = JSON.parse(JSON.stringify(this));

    if (snakecaseKey) {
      return snakecaseKeys(json);
    }

    return json;
  }
}
