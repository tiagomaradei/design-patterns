import ChicagoPizzaIngredientFactory from 'AbstractFactory/factories/chicago/ChicagoPizzaIngredientFactory';
import CheesePizza from 'AbstractFactory/flavors/CheesePizza';
import ClamPizza from 'AbstractFactory/flavors/ClamPizza';
import Pizza from '../Pizza';
import PizzaStore from './PizzaStore';

class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName('Chicago Cheese Pizza');
        break;
      case 'clam':
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName('Chicago Clam Pizza');
        break;
      default:
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName('Chicago Cheese Pizza');
    }

    return pizza;
  }
}

export default ChicagoPizzaStore;
