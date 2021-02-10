import IDVDPlayer from 'Facade/DVDPlayer/IDVDPlayer';
import IProjector from 'Facade/Projector/IProjector';

export default class Projector implements IProjector {
  public on(): void {
    console.log('Projector is ON');
  }

  public off(): void {
    console.log('Projector is OFF');
  }

  public setInput(input: IDVDPlayer): void {
    console.log(`Input is set to ${input}`);
  }

  public tvMode(): void {
    console.log('TV Mode is set');
  }

  public wideScreenMode(): void {
    console.log('Wide Screen Mode is set');
  }
}
