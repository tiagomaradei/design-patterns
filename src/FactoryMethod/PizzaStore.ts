import Pizza from './Pizza';

abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  public abstract createPizza(type: string): Pizza;
}

export default PizzaStore;
