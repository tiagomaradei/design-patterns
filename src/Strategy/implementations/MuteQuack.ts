import IQuackBehavior from '../contracts/IQuackBehavior';

class MuteQuack implements IQuackBehavior {
  public quack(): void {
    console.log('Silêncio...');
  }
}

export default MuteQuack;
