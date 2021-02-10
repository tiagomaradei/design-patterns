export default interface ISintonizer {
  on(): void;
  off(): void;
  setAm(): void;
  setFm(): void;
  setFrequency(): void;
}
