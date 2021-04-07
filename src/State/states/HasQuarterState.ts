import GumballMachine from 'State/GumballMachine';
import State from 'State/State';

export default class HasQuarterState extends State {
  private gumballMachine: GumballMachine;

  public constructor(gumballMachine: GumballMachine) {
    super();
    this.gumballMachine = gumballMachine;
  }

  public ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public turnCrank(): void {
    console.log('You turned...');
    const number = Math.floor(Math.random() * 10);

    if (number === 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }
}
