import IPopCornMachine from 'Facade/PopCornMachine/IPopCornMachine';

export default class PopCornMachine implements IPopCornMachine {
  public on(): void {
    console.log('Pop Corn Machine is ON');
  }

  public off(): void {
    console.log('Pop Corn Machine is OFF');
  }

  public pop(): void {
    console.log('Pop Corn Machine is popping');
  }
}
