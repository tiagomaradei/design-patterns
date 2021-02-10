import Pepperoni from 'AbstractFactory/base-ingredients/Pepperoni';

class FreshPepperoni extends Pepperoni {
  constructor() {
    super();
    this.description = 'Fresh Pepperoni';
    console.log(this.description);
  }
}

export default FreshPepperoni;
