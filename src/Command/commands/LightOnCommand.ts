import ICommand from '../ICommand';
import Light from '../receptors/Light';

class LightOnCommand implements ICommand {
  protected light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

export default LightOnCommand;
