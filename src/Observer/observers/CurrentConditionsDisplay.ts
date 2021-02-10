import IDisplayElement from '../contracts/IDisplayElement';
import IObserver, { Measurements } from '../contracts/IObserver';
import ISubject from '../contracts/ISubject';

class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private temperature: number;

  private humidity: number;

  private weaterData: ISubject;

  constructor(weaterData: ISubject) {
    this.weaterData = weaterData;
    weaterData.registerObserver(this);
  }

  public update({ temperature, humidity }: Measurements): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(
      `Current Conditions: ${this.temperature} graus e ${this.humidity}% humidade`,
    );
  }
}

export default CurrentConditionsDisplay;
