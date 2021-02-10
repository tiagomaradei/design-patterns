import Pizza from 'FactoryMethod/Pizza';

class ChicagoClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Clam Pizza';
    this.dough = 'Extra Crust Dough';
    this.suace = 'Tomato Sauce';
    this.topPings.push('Better Cheese on planet');
  }

  public cut(): void {
    console.log('Cutting the pizza into square slices...');
  }
}

export default ChicagoClamPizza;
