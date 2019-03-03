export class PageGettable {
  cursor?: string;
  limit?: number;

  setCursor(value: string): void {
    this.cursor = value;
  }

  setLimit(value: number): void {
    this.limit = value;
  }
}
