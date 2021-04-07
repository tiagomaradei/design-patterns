import GumballMachine from 'State/GumballMachine';
import State from 'State/State';

export default class WinnerState extends State {
  private gumballMachine: GumballMachine;

  public constructor(gumballMachine: GumballMachine) {
    super();
    this.gumballMachine = gumballMachine;
  }

  public dispense(): void {
    console.log('You are a winner! You got two gumballs for your quarter');

    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();

      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('Oops, out of gumballs');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}
