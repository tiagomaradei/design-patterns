import NYPizzaStore from './stores/newyork/NYPizzaStore';
import ChicagoPizzaStore from './stores/chicago/ChicagoPizzaStore';

const nyStore = new NYPizzaStore();
const pizza = nyStore.orderPizza('cheese');
console.log(`Ethan orderder a ${pizza.getName()}`);

console.log('-------------------------');

const chicagoStore = new ChicagoPizzaStore();
const pizza2 = chicagoStore.orderPizza('clam');
console.log(`Joel orderder a ${pizza2.getName()}`);
