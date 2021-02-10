import Beverage from './Beverage';

abstract class CondimentsDecorator extends Beverage {
  abstract getDescription(): string;
}

export default CondimentsDecorator;
