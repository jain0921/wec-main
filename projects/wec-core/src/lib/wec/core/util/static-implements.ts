import { Menu } from '../model/menu';

export function staticImplements<T>() {
  return (constructor: T) => {};
}
