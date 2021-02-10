import Pizza from 'FactoryMethod/Pizza';

class NYCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.suace = 'Marinara Sauce';
    this.topPings.push('Grated Reggiano Cheese');
  }
}

export default NYCheesePizza;
