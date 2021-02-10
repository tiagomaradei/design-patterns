import Ingredient from './Ingredient';

export default abstract class Cheese extends Ingredient {
  constructor() {
    super();
    this.description = 'Cheese';
  }
}
