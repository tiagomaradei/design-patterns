import IAmplifier from './Amplifier/IAmplifier';
import IDVDPlayer from './DVDPlayer/IDVDPlayer';
import ILight from './Light/ILight';
import IPopCornMachine from './PopCornMachine/IPopCornMachine';
import IProjector from './Projector/IProjector';
import IScreen from './Screen/IScreen';

export default class HomeTheaterFacade {
  private amplifier: IAmplifier;

  private dvdPlayer: IDVDPlayer;

  private projector: IProjector;

  private light: ILight;

  private screen: IScreen;

  private popCornMachine: IPopCornMachine;

  constructor(
    amplifier: IAmplifier,
    dvdPlayer: IDVDPlayer,
    projector: IProjector,
    light: ILight,
    screen: IScreen,
    popCornMachine: IPopCornMachine,
  ) {
    this.amplifier = amplifier;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.light = light;
    this.screen = screen;
    this.popCornMachine = popCornMachine;
  }

  public watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');

    this.popCornMachine.on();
    this.popCornMachine.pop();
    this.light.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setDvd(this.dvdPlayer);
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(5);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  public endMovie(): void {
    console.log('Shutting movie theater down...');

    this.popCornMachine.off();
    this.light.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.dvdPlayer.stop();
    this.dvdPlayer.eject();
    this.dvdPlayer.off();
  }
}
