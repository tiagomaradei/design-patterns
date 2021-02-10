import IDisplayElement from 'Observer/contracts/IDisplayElement';
import IObserver, { Measurements } from 'Observer/contracts/IObserver';
import ISubject from 'Observer/contracts/ISubject';

class StatisticsDisplay implements IObserver, IDisplayElement {
  private maxTemperature = 0;

  private minTemperature = 200;

  private sumTemperature = 0;

  private numReadings = 0;

  private weatherData: ISubject;

  public constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update({ temperature }: Measurements): void {
    this.sumTemperature += temperature;
    this.numReadings += 1;

    if (temperature > this.maxTemperature) {
      this.maxTemperature = temperature;
    }

    if (temperature < this.minTemperature) {
      this.minTemperature = temperature;
    }

    this.display();
  }

  public display(): void {
    console.log(
      `Avg/Max/Min temperature: ${this.sumTemperature / this.numReadings}/${
        this.maxTemperature
      }/${this.minTemperature}`,
    );
  }
}

export default StatisticsDisplay;
