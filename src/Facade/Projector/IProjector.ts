import IDVDPlayer from 'Facade/DVDPlayer/IDVDPlayer';

export default interface IProjector {
  on(): void;
  off(): void;
  setInput(input: IDVDPlayer): void;
  tvMode(): void;
  wideScreenMode(): void;
}
