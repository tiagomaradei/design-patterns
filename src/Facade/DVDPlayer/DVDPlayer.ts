import IDVDPlayer from 'Facade/DVDPlayer/IDVDPlayer';

export default class DVDPlayer implements IDVDPlayer {
  public on(): void {
    console.log('DVDPlayer is ON');
  }

  public off(): void {
    console.log('DVDPlayer is OFF');
  }

  public eject(): void {
    console.log('DVD is ejected');
  }

  public pause(): void {
    console.log('DVD is paused');
  }

  public play(movie: string): void {
    console.log(`Playing ${movie}`);
  }

  public setSurroundAudio(): void {
    console.log('Surround Audio is set');
  }

  public setTwoChannelAudio(): void {
    console.log('Two Channel Audio is set');
  }

  public stop(): void {
    console.log('DVDPayer is stopped');
  }
}
