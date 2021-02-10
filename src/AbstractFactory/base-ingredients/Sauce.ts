import Ingredient from './Ingredient';

export default abstract class Sauce extends Ingredient {
  constructor() {
    super();
    this.description = 'Sauce';
  }
}
