import Dough from 'AbstractFactory/base-ingredients/Dough';

class ThickCrustDough extends Dough {
  constructor() {
    super();
    this.description = 'Thick Crust Dough';
    console.log(this.description);
  }
}

export default ThickCrustDough;
