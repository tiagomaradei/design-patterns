export default abstract class State {
  public insertQuarter(): void {
    console.log('No quarter');
  }

  public ejectQuarter(): void {
    console.log('Not available');
  }

  public turnCrank(): void {
    console.log('Not available');
  }

  public dispense(): void {
    console.log('No gumball dispensed');
  }
}
