import IQuackBehavior from './contracts/IQuackBehavior';
import IFlyBehavior from './contracts/IFlyBehavior';

abstract class Duck {
  protected flyBehavior: IFlyBehavior;

  protected quackBehavior: IQuackBehavior;

  abstract display(): void;

  public setFlyBehavior(flyBehaivor: IFlyBehavior): void {
    this.flyBehavior = flyBehaivor;
  }

  public setQuackBehavior(quackBehaivor: IQuackBehavior): void {
    this.quackBehavior = quackBehaivor;
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swin(): void {
    console.log('Nadando...');
  }
}

export default Duck;
