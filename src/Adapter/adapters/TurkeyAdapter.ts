import IDuck from 'Adapter/IDuck';
import ITurkey from 'Adapter/ITurkey';

export default class TurkeyAdapter implements IDuck {
  private turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    this.turkey.fly();
  }
}
