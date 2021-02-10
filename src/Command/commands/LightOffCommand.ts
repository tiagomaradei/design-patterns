import ICommand from '../ICommand';
import Light from '../receptors/Light';

class LightOffCommand implements ICommand {
  protected light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

export default LightOffCommand;
