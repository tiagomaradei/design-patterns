import Dough from 'AbstractFactory/base-ingredients/Dough';

class ThinCrustDough extends Dough {
  constructor() {
    super();
    this.description = 'Thin Crust Dough';
    console.log(this.description);
  }
}

export default ThinCrustDough;
