import Beverage from '../Beverage';

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'DarkRoast Coffee';
  }

  public cost(): number {
    return 0.99;
  }
}

export default DarkRoast;
