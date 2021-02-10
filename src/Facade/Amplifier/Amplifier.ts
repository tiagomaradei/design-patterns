import IAmplifier from 'Facade/Amplifier/IAmplifier';
import ICDPlayer from 'Facade/CDPlayer/ICDPlayer';
import IDVDPlayer from 'Facade/DVDPlayer/IDVDPlayer';

export default class Amplifier implements IAmplifier {
  public on(): void {
    console.log('Amplifier is ON');
  }

  public off(): void {
    console.log('Amplifier is OFF');
  }

  public setCd(cd: ICDPlayer): void {
    console.log(`CD is set to ${cd}`);
  }

  public setDvd(dvd: IDVDPlayer): void {
    console.log(`DVD is set to ${dvd}`);
  }

  public setStereoSound(): void {
    console.log('Stereo Sound is set');
  }

  public setTuner(): void {
    console.log('Tuner is set');
  }

  public setVolume(volume: number): void {
    console.log(`Volume is set to ${volume}`);
  }
}
