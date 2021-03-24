import IIterator from './IIterator';
import MenuItem from './menu/MenuItem';

export default class MenuInterator implements IIterator {
  protected items: MenuItem[];

  protected position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  public next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  public hasNext(): boolean {
    return !(
      this.position >= this.items.length || this.items[this.position] == null
    );
  }
}
