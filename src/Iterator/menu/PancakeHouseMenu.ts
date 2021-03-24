import MenuInterator from 'Iterator/MenuInterator';
import IIterator from 'Iterator/IIterator';
import MenuItem from './MenuItem';
import Menu from './Menu';

export default class PancakeHouseMenu extends Menu {
  constructor() {
    super();
    this.addItem('K&B', 'K&B', true, 2.99);
    this.addItem(
      'Regular Pancake Breakfast',
      'Regular Pancake Breakfast',
      false,
      2.99,
    );
    this.addItem('Blueberry Pancakes', 'Blueberry Pancakes', false, 3.49);
    this.addItem('Waffes', 'Waffes', true, 3.49);
  }

  public addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem(name, description, isVegetarian, price);
    this.menuItems.push(menuItem);
  }

  public createInterator(): IIterator {
    return new MenuInterator(this.menuItems);
  }
}
