import IScreen from 'Facade/Screen/IScreen';

export default class Screen implements IScreen {
  public up(): void {
    console.log('Screen is up');
  }

  public down(): void {
    console.log('Screen is down');
  }
}
