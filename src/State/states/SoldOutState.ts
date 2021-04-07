import State from 'State/State';

export default class SoldOutState extends State {
  public insertQuarter(): void {
    console.log('You cannot insert a quarter, the machine is sold out');
  }

  public ejectQuarter(): void {
    console.log('You cannot eject, you have not inserted a quarted yet');
  }

  public turnCrank(): void {
    console.log('Turning turned, but the are no gumball');
  }
}
