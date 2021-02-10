// import DarkRoast from './beverages/DarkRoast';
import Expresso from './beverages/Expresso';
import Mocha from './condiments/Mocha';
import Soy from './condiments/Soy';
import Whip from './condiments/Whip';

const beverage = new Expresso();

console.log(`${beverage.getDescription()} - ${beverage.cost()}`);

let beverage2 = new Expresso();
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
beverage2 = new Soy(beverage2);

console.log(`${beverage2.getDescription()} - ${beverage2.cost()}`);
