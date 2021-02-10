export default interface IDVDPlayer {
  on(): void;
  off(): void;
  eject(): void;
  pause(): void;
  play(movie: string): void;
  setSurroundAudio(): void;
  setTwoChannelAudio(): void;
  stop(): void;
}
