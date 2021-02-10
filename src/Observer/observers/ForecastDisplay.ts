import IDisplayElement from 'Observer/contracts/IDisplayElement';
import IObserver, { Measurements } from 'Observer/contracts/IObserver';
import ISubject from 'Observer/contracts/ISubject';

class ForecastDisplay implements IObserver, IDisplayElement {
  private currentPressure = 29.92;

  private lastPressure: number;

  private weatherData: ISubject;

  public constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update({ pressure }: Measurements): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  public display(): void {
    if (this.currentPressure > this.lastPressure) {
      console.log('Forecast: Improving weather on the way!');
    } else if (this.currentPressure === this.lastPressure) {
      console.log('Forecast: More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Forecast: Watch out for cooler, rainy weather');
    }
  }
}

export default ForecastDisplay;
