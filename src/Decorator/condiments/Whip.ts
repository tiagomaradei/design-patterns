import Beverage from '../Beverage';
import CondimentsDecorator from '../CondimentsDecorator';

class Whip extends CondimentsDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`;
  }

  public cost(): number {
    return 0.1 + this.beverage.cost();
  }
}

export default Whip;
