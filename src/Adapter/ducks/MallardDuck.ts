import IDuck from '../IDuck';

export default class MallardDuck implements IDuck {
  public quack(): void {
    console.log('quack');
  }

  public fly(): void {
    console.log('Flying');
  }
}
