import ICommand from '../ICommand';
import GarageDoor from '../receptors/GarageDoor';

class GarageDoorOpenCommand implements ICommand {
  protected garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.up();
  }

  public undo(): void {
    this.garageDoor.down();
  }
}

export default GarageDoorOpenCommand;
