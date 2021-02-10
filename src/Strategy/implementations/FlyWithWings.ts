import IFlyBehavior from '../contracts/IFlyBehavior';

class FlyWithWings implements IFlyBehavior {
  public fly(): void {
    console.log('Voando com asas...');
  }
}

export default FlyWithWings;
