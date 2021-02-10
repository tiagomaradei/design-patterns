export default interface ICDPlayer {
  on(): void;
  off(): void;
  eject(): void;
  pause(): void;
  play(cd: string): void;
  stop(): void;
}
