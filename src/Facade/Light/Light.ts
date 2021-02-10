import ILight from 'Facade/Light/ILight';

export default class Light implements ILight {
  public on(): void {
    console.log('Light is ON');
  }

  public off(): void {
    console.log('Light is OFF');
  }

  public dim(level: number): void {
    console.log(`Dim is set to ${level}`);
  }
}
