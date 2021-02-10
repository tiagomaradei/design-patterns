import Clam from 'AbstractFactory/base-ingredients/Clam';

class FreshClam extends Clam {
  constructor() {
    super();
    this.description = 'Fresh Clam';
    console.log(this.description);
  }
}

export default FreshClam;
