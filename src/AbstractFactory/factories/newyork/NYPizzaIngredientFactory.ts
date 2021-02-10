import Cheese from 'AbstractFactory/base-ingredients/Cheese';
import Clam from 'AbstractFactory/base-ingredients/Clam';
import Dough from 'AbstractFactory/base-ingredients/Dough';
import Pepperoni from 'AbstractFactory/base-ingredients/Pepperoni';
import Sauce from 'AbstractFactory/base-ingredients/Sauce';
import IPizzaIngredientFactory from 'AbstractFactory/interfaces/IPizzaIngredientFactory';
import FreshClam from './ingredients/FreshClam';
import MarinaraSauce from './ingredients/MarinaraSauce';
import ReggianoCheese from './ingredients/ReggianoCheese';
import SlicedPepperoni from './ingredients/SlicedPepperoni';
import ThinCrustDough from './ingredients/ThinCrustDough';

class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough();
  }

  public createSauce(): Sauce {
    return new MarinaraSauce();
  }

  public createCheese(): Cheese {
    return new ReggianoCheese();
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public createClam(): Clam {
    return new FreshClam();
  }
}

export default NYPizzaIngredientFactory;
