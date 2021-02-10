import Pizza from 'FactoryMethod/Pizza';
import PizzaStore from 'FactoryMethod/PizzaStore';
import NYCheesePizza from './flavors/NYCheesePizza';
import NYClamPizza from './flavors/NYClamPizza';
import NYVeggiePizza from './flavors/NYVeggiePizza';

class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYCheesePizza();
      case 'veggie':
        return new NYVeggiePizza();
      case 'clam':
        return new NYVeggiePizza();
      default:
        return new NYClamPizza();
    }
  }
}

export default NYPizzaStore;
