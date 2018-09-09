import { Menu } from '../model/menu';
import { staticImplements } from './static-implements';

@staticImplements<Menu>()
export class MenuConfig {
  public static names(): string {
    return '';
  }
  public static get(name: string): any {
    return null;
  }
}
