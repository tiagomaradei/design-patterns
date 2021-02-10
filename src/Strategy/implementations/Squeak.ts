import IQuackBehavior from '../contracts/IQuackBehavior';

class Squeak implements IQuackBehavior {
  public quack(): void {
    console.log('Squeak...');
  }
}

export default Squeak;
