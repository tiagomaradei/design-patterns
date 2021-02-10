import Ingredient from './Ingredient';

export default abstract class Clam extends Ingredient {
  constructor() {
    super();
    this.description = 'Clam';
  }
}
