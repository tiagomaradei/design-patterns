import Beverage from '../Beverage';

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf Coffee';
  }

  public cost(): number {
    return 0.99;
  }
}

export default Decaf;
