import Pizza from 'FactoryMethod/Pizza';

class NYClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Clam Pizza';
    this.dough = 'Thin Crust Dough';
    this.suace = 'Marinara Sauce';
    this.topPings.push('Grated Reggiano Cheese');
  }
}

export default NYClamPizza;
