import Cheese from 'AbstractFactory/base-ingredients/Cheese';

class ReggianoCheese extends Cheese {
  constructor() {
    super();
    this.description = 'Reggiano Cheese';
    console.log(this.description);
  }
}

export default ReggianoCheese;
