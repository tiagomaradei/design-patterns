import Pizza from 'FactoryMethod/Pizza';

class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.suace = 'Plum Tomato Sauce';
    this.topPings.push('Shredded Mozzarella Cheese');
  }

  public cut(): void {
    console.log('Cutting the pizza into square slices...');
  }
}

export default ChicagoCheesePizza;
