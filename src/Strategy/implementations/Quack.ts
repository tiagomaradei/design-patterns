import IQuackBehavior from '../contracts/IQuackBehavior';

class Quack implements IQuackBehavior {
  public quack(): void {
    console.log('Quack...');
  }
}

export default Quack;
