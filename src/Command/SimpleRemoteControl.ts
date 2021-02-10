import ICommand from './ICommand';

class SimpleRemoteControl {
  protected command: ICommand;

  public setCommand(command: ICommand): void {
    this.command = command;
  }

  public buttonWasPressed(): void {
    this.command.execute();
  }

  public undoButtonWasPressed(): void {
    this.command.undo();
  }
}

export default SimpleRemoteControl;
