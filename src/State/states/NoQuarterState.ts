import GumballMachine from 'State/GumballMachine';
import State from 'State/State';

export default class NoQuarterState extends State {
  private gumballMachine: GumballMachine;

  public constructor(gumballMachine: GumballMachine) {
    super();
    this.gumballMachine = gumballMachine;
  }

  public insertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
}
