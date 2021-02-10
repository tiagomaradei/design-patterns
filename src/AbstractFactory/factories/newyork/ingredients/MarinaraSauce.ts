import Sauce from 'AbstractFactory/base-ingredients/Sauce';

class MarinaraSauce extends Sauce {
  constructor() {
    super();
    this.description = 'Marinara Sauce';
    console.log(this.description);
  }
}

export default MarinaraSauce;
