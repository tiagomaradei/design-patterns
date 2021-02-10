import ITurkey from 'Adapter/ITurkey';

export default class WildTurkey implements ITurkey {
  public gobble(): void {
    console.log('Gobble');
  }

  public fly(): void {
    console.log('Flying');
  }
}
