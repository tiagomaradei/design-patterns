import Beverage from '../Beverage';
import CondimentsDecorator from '../CondimentsDecorator';

class Mocha extends CondimentsDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  public cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export default Mocha;
