import Beverage from '../Beverage';

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend coffee';
  }

  public cost(): number {
    return 0.89;
  }
}

export default HouseBlend;
