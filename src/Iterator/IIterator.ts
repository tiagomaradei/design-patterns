import MenuItem from './menu/MenuItem';

export default interface IIterator {
  hasNext(): boolean;
  next(): MenuItem;
}
