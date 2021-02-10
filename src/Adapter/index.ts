import MallardDuck from './ducks/MallardDuck';
import TurkeyAdapter from './adapters/TurkeyAdapter';
import WildTurkey from './turkeys/WildTurkey';

const mallardDuck = new MallardDuck();
const wildTrukey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(wildTrukey);

console.log('Turkey says...');
wildTrukey.gobble();
wildTrukey.fly();

console.log('---------------------------');

console.log('Duck says...');
mallardDuck.quack();
mallardDuck.fly();

console.log('---------------------------');

console.log('TurkeyAdapter says...');
turkeyAdapter.quack();
turkeyAdapter.fly();
