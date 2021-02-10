import IFlyBehavior from '../contracts/IFlyBehavior';

class FlyNoWay implements IFlyBehavior {
  public fly(): void {
    console.log('Não posso voar...');
  }
}

export default FlyNoWay;
