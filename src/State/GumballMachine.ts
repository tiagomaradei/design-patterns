import State from './State';
import HasQuarterState from './states/HasQuarterState';
import NoQuarterState from './states/NoQuarterState';
import SoldOutState from './states/SoldOutState';
import SoldState from './states/SoldState';
import WinnerState from './states/WinnerState';

export default class GumballMachine {
  private soldOutState: SoldOutState;

  private noQuarterState: NoQuarterState;

  private hasQuarterState: HasQuarterState;

  private soldState: SoldState;

  private winnerState: WinnerState;

  private state: State;

  private count = 0;

  public constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState();
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);
    this.count = numberGumballs;

    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public releaseBall(): void {
    console.log('A gumball comes rolling out the slot...');
    if (this.count !== 0) this.count -= 1;
  }

  public getSoldOutState(): SoldOutState {
    return this.soldOutState;
  }

  public getNoQuarterState(): NoQuarterState {
    return this.noQuarterState;
  }

  public getHasQuarterState(): HasQuarterState {
    return this.hasQuarterState;
  }

  public getSoldState(): SoldState {
    return this.soldState;
  }

  public getWinnerState(): WinnerState {
    return this.winnerState;
  }

  public getCount(): number {
    return this.count;
  }

  public getState(): State {
    return this.state;
  }
}
