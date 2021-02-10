import ICDPlayer from '../CDPlayer/ICDPlayer';
import IDVDPlayer from '../DVDPlayer/IDVDPlayer';

export default interface IAmplifier {
  on(): void;
  off(): void;
  setStereoSound(): void;
  setTuner(): void;
  setCd(cd: ICDPlayer): void;
  setDvd(dvd: IDVDPlayer): void;
  setVolume(volume: number): void;
}
