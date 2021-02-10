import NYPizzaStore from './stores/NYPizzaStore';
import ChicagoPizzaStore from './stores/ChicagoPizzaStore';

const nyStore = new NYPizzaStore();
const pizza = nyStore.orderPizza('cheese');
console.log(`Ethan orderder a ${pizza.getName()}`);

console.log('-------------------------');

const chicagoStore = new ChicagoPizzaStore();
const pizza2 = chicagoStore.orderPizza('clam');
console.log(`Joel orderder a ${pizza2.getName()}`);
