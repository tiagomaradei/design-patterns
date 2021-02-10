import Quack from './implementations/Quack';
import FlyWithWings from './implementations/FlyWithWings';
import Duck from './Duck';

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display(): void {
    console.log('Eu sou o Mallard Duck');
  }
}

export default MallardDuck;
