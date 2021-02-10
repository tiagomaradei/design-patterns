import Ingredient from './Ingredient';

export default abstract class Pepperoni extends Ingredient {
  constructor() {
    super();
    this.description = 'Pepperoni';
  }
}
