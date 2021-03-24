import IIterator from 'Iterator/IIterator';
import MenuItem from './MenuItem';

export default abstract class Menu {
  protected menuItems: MenuItem[] = [] as MenuItem[];

  abstract addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number,
  ): void;

  abstract createInterator(): IIterator;
}
