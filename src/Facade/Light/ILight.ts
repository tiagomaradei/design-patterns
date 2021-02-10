export default interface ILight {
  on(): void;
  off(): void;
  dim(level: number): void;
}
