import Pizza from 'AbstractFactory/Pizza';
import IPizzaIngredientFactory from '../interfaces/IPizzaIngredientFactory';

class CheesePizza extends Pizza {
  private ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    this.suace = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export default CheesePizza;
