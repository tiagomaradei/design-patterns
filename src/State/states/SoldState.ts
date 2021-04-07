import GumballMachine from 'State/GumballMachine';
import State from 'State/State';

export default class SoldState extends State {
  private gumballMachine: GumballMachine;

  public constructor(gumballMachine: GumballMachine) {
    super();
    this.gumballMachine = gumballMachine;
  }

  public dispense(): void {
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumballs');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}
