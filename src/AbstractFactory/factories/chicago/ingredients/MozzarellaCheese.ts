import Cheese from 'AbstractFactory/base-ingredients/Cheese';

class MozzarellaCheese extends Cheese {
  constructor() {
    super();
    this.description = 'Mozzarella Cheese';
    console.log(this.description);
  }
}

export default MozzarellaCheese;
