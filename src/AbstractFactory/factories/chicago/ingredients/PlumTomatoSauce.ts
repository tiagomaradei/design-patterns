import Sauce from 'AbstractFactory/base-ingredients/Sauce';

class PlumTomatoSauce extends Sauce {
  constructor() {
    super();
    this.description = 'Plum Tomato Sauce';
    console.log(this.description);
  }
}

export default PlumTomatoSauce;
