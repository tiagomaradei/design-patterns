import Ingredient from './Ingredient';

export default abstract class Dough extends Ingredient {
  constructor() {
    super();
    this.description = 'Dough';
  }
}
