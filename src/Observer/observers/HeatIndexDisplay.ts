import IDisplayElement from 'Observer/contracts/IDisplayElement';
import IObserver, { Measurements } from 'Observer/contracts/IObserver';
import ISubject from 'Observer/contracts/ISubject';

class HeatIndexDisplay implements IObserver, IDisplayElement {
  private heatIndex = 0.0;

  private weatherData: ISubject;

  public constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update({ temperature, humidity }: Measurements): void {
    this.heatIndex = this.computeHeatIndex(temperature, humidity);
    this.display();
  }

  private computeHeatIndex(temperature: number, humidity: number) {
    const index =
      16.923 +
      0.185212 * temperature +
      5.37941 * humidity -
      0.100254 * temperature * humidity +
      0.00941695 * (temperature * temperature) +
      0.00728898 * (humidity * humidity) +
      0.000345372 * (temperature * temperature * humidity) -
      0.000814971 * (temperature * humidity * humidity) +
      0.0000102102 * (temperature * temperature * humidity * humidity) -
      0.000038646 * (temperature * temperature * temperature) +
      0.0000291583 * (humidity * humidity * humidity) +
      0.00000142721 * (temperature * temperature * temperature * humidity) +
      0.000000197483 * (temperature * humidity * humidity * humidity) -
      0.0000000218429 *
        (temperature * temperature * temperature * humidity * humidity) +
      0.000000000843296 *
        (temperature * temperature * humidity * humidity * humidity) -
      0.0000000000481975 *
        (temperature *
          temperature *
          temperature *
          humidity *
          humidity *
          humidity);
    return index;
  }

  public display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }
}

export default HeatIndexDisplay;
