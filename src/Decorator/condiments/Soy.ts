import Beverage from '../Beverage';
import CondimentsDecorator from '../CondimentsDecorator';

class Soy extends CondimentsDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  public cost(): number {
    return 0.15 + this.beverage.cost();
  }
}

export default Soy;
