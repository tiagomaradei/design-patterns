import ISintonizer from 'Facade/Sintonizer/ISintonizer';

export default class Sintonizer implements ISintonizer {
  public on(): void {
    console.log('Sintonizer is ON');
  }

  public off(): void {
    console.log('Sintonizer is OFF');
  }

  public setAm(): void {
    console.log('AM is set');
  }

  public setFm(): void {
    console.log('FM is set');
  }

  public setFrequency(): void {
    console.log('Frequency is set');
  }
}
