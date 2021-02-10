import Quack from './implementations/Quack';
import FlyNoWay from './implementations/FlyNoWay';
import Duck from './Duck';

class ModelDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  public display(): void {
    console.log('Eu sou o modelo de Duck');
  }
}

export default ModelDuck;
