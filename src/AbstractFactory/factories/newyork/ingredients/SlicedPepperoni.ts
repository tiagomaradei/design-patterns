import Pepperoni from 'AbstractFactory/base-ingredients/Pepperoni';

class SlicedPepperoni extends Pepperoni {
  constructor() {
    super();
    this.description = 'Sliced Pepperoni';
    console.log(this.description);
  }
}

export default SlicedPepperoni;
