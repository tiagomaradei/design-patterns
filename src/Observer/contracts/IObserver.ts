export type Measurements = {
  temperature: number;
  humidity: number;
  pressure: number;
};

export default interface IObserver {
  update(data: Measurements): void;
}
