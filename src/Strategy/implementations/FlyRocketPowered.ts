import IFlyBehavior from '../contracts/IFlyBehavior';

class FlyRocketPowered implements IFlyBehavior {
  public fly(): void {
    console.log('Voando com um foguete...');
  }
}

export default FlyRocketPowered;
