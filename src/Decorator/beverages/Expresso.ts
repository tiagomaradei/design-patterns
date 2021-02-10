import Beverage from '../Beverage';

class Expresso extends Beverage {
  constructor() {
    super();
    this.description = 'Expresso coffee';
  }

  public cost(): number {
    return 1.99;
  }
}

export default Expresso;
