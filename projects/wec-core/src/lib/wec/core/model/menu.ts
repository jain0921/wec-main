export interface Menu {
  names(): string;
  get(name: string): any;
}
