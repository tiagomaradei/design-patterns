import FlyRocketPowered from 'Strategy/implementations/FlyRocketPowered';
import MallardDuck from './MallardDuck';
import ModelDuck from './ModelDuck';

const mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

console.log('---------------------------');

const modelDuck = new ModelDuck();
modelDuck.display();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();
