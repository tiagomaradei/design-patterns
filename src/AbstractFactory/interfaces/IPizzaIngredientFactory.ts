import Cheese from '../base-ingredients/Cheese';
import Clam from '../base-ingredients/Clam';
import Dough from '../base-ingredients/Dough';
import Pepperoni from '../base-ingredients/Pepperoni';
import Sauce from '../base-ingredients/Sauce';

export default interface IPizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}
