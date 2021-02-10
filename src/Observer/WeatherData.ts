import IObserver from './contracts/IObserver';
import ISubject from './contracts/ISubject';

class WeaterData implements ISubject {
  private observers: IObserver[] = [];

  private temperature: number;

  private humidity: number;

  private pressure: number;

  public registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);

    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update({
        temperature: this.temperature,
        humidity: this.humidity,
        pressure: this.pressure,
      });
    });
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

export default WeaterData;
