import ICommand from '../ICommand';

class MacroCommand implements ICommand {
  protected commands: ICommand[] = [];

  constructor(commands: ICommand[]) {
    this.commands = commands;
  }

  public execute(): void {
    this.commands.forEach(command => {
      command.execute();
    });
  }

  public undo(): void {
    this.commands.forEach(command => {
      command.undo();
    });
  }
}

export default MacroCommand;
