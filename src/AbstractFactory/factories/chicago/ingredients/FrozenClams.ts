import Clam from 'AbstractFactory/base-ingredients/Clam';

class FrozenClam extends Clam {
  constructor() {
    super();
    this.description = 'Flozen Clam';
    console.log(this.description);
  }
}

export default FrozenClam;
