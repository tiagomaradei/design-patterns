import NYPizzaIngredientFactory from 'AbstractFactory/factories/newyork/NYPizzaIngredientFactory';
import CheesePizza from 'AbstractFactory/flavors/CheesePizza';
import ClamPizza from 'AbstractFactory/flavors/ClamPizza';
import Pizza from '../Pizza';
import PizzaStore from './PizzaStore';

class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName('NY Cheese Pizza');
        break;
      case 'clam':
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName('NY Clam Pizza');
        break;
      default:
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName('NY Cheese Pizza');
    }

    return pizza;
  }
}

export default NYPizzaStore;
