import MenuInterator from 'Iterator/MenuInterator';
import IIterator from 'Iterator/IIterator';
import MenuItem from './MenuItem';
import Menu from './Menu';

export default class DinerMenu extends Menu {
  protected static MAX_ITEMS = 5;

  protected numberOfItems = 0;

  constructor() {
    super();
    this.addItem('Vegetarian BLT', 'Vegetarian BLT', true, 2.99);
    this.addItem('BLT', 'BLT', false, 2.99);
    this.addItem('Soup of the day', 'Soup of the day', false, 3.29);
    this.addItem('Hot Dog', 'Hot Dog', false, 3.05);
  }

  public addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem(name, description, isVegetarian, price);
    if (this.numberOfItems > DinerMenu.MAX_ITEMS) {
      throw new Error('Menu is full');
    } else {
      this.menuItems.push(menuItem);
      this.numberOfItems += 1;
    }
  }

  public createInterator(): IIterator {
    return new MenuInterator(this.menuItems);
  }
}
