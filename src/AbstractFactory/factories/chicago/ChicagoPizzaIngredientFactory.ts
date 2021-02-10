import Cheese from 'AbstractFactory/base-ingredients/Cheese';
import Clam from 'AbstractFactory/base-ingredients/Clam';
import Dough from 'AbstractFactory/base-ingredients/Dough';
import Pepperoni from 'AbstractFactory/base-ingredients/Pepperoni';
import Sauce from 'AbstractFactory/base-ingredients/Sauce';
import IPizzaIngredientFactory from 'AbstractFactory/interfaces/IPizzaIngredientFactory';
import FreshPepperoni from './ingredients/FreshPepperoni';
import FrozenClam from './ingredients/FrozenClams';
import MozzarellaCheese from './ingredients/MozzarellaCheese';
import PlumTomatoSauce from './ingredients/PlumTomatoSauce';
import ThickCrustDough from './ingredients/ThickCrustDough';

class ChicagoPizzaIngredientFactory implements IPizzaIngredientFactory {
  public createDough(): Dough {
    return new ThickCrustDough();
  }

  public createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  public createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  public createPepperoni(): Pepperoni {
    return new FreshPepperoni();
  }

  public createClam(): Clam {
    return new FrozenClam();
  }
}

export default ChicagoPizzaIngredientFactory;
