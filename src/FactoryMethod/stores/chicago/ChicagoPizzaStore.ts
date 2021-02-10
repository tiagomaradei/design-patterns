import Pizza from 'FactoryMethod/Pizza';
import PizzaStore from 'FactoryMethod/PizzaStore';
import ChicagoCheesePizza from './flavors/ChicagoCheesePizza';
import ChicagoClamPizza from './flavors/ChicagoClamPizza';
import ChicagoVeggiePizza from './flavors/ChicagoVeggiePizza';

class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoCheesePizza();
      case 'veggie':
        return new ChicagoVeggiePizza();
      case 'clam':
        return new ChicagoClamPizza();
      default:
        return new ChicagoClamPizza();
    }
  }
}

export default ChicagoPizzaStore;
