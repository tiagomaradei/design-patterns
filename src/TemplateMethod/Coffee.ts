import CaffeineBeverage from './CaffeineBeverage';

export default class Coffee extends CaffeineBeverage {
  public brew(): void {
    console.log('Dripping coffe through filter');
  }

  public addCondiments(): void {
    console.log('Adding Sugar and Milk');
  }

  public customerWantsCondiments(): boolean {
    return false;
  }
}
