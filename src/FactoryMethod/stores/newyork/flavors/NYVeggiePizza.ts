import Pizza from 'FactoryMethod/Pizza';

class NYVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Veggie Pizza';
    this.dough = 'Thin Crust Dough';
    this.suace = 'Marinara Sauce';
    this.topPings.push('Grated Reggiano Cheese');
  }
}

export default NYVeggiePizza;
