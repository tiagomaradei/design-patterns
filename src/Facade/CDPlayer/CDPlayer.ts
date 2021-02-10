import ICDPlayer from 'Facade/CDPlayer/ICDPlayer';

export default class CDPlayer implements ICDPlayer {
  public on(): void {
    console.log('CDPlayer is ON');
  }

  public off(): void {
    console.log('CDPlayer is OFF');
  }

  public eject(): void {
    console.log('CD is ejected');
  }

  public pause(): void {
    console.log('CDPlayer is paused');
  }

  public play(cd: string): void {
    console.log(`Playing ${cd}`);
  }

  public stop(): void {
    console.log(`CDPlayer is stopped`);
  }
}
