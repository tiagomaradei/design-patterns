import IIterator from './IIterator';
import Menu from './menu/Menu';

export default class Waitress {
  protected menus: Menu[];

  constructor(menus: Menu[]) {
    this.menus = menus;
  }

  public printMenus(): void {
    this.menus.forEach(menu => {
      const menuIterator = menu.createInterator();
      console.log('Menu:');
      this.printMenu(menuIterator);
    });
  }

  private printMenu(iterator: IIterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(
        `${menuItem.getName()}, ${menuItem.getDescription()} -- ${menuItem.getPrice()}`,
      );
    }
  }
}
