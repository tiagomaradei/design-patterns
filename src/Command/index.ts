import LightOnCommand from './commands/LightOnCommand';
import Light from './receptors/Light';
import SimpleRemoteControl from './SimpleRemoteControl';
import GarageDoor from './receptors/GarageDoor';
import GarageDoorOpenCommand from './commands/GarageDoorOpenCommand';
import LightOffCommand from './commands/LightOffCommand';
import MacroCommand from './commands/MacroCommand';

const remote = new SimpleRemoteControl();

const light = new Light('Sala');
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

remote.setCommand(lightOn);
remote.buttonWasPressed();
remote.setCommand(lightOff);
remote.buttonWasPressed();
remote.undoButtonWasPressed();

const garageDoor = new GarageDoor();
const garageOpen = new GarageDoorOpenCommand(garageDoor);

remote.setCommand(garageOpen);
remote.buttonWasPressed();

console.log('-------------------------------');

const kitchenLight = new Light('Cozinha');
const kitchenLightOn = new LightOnCommand(kitchenLight);

const secondGarageDoor = new GarageDoor();
const secondGarageOpen = new GarageDoorOpenCommand(secondGarageDoor);

const partyOn = [kitchenLightOn, secondGarageOpen];
const partyOnMacro = new MacroCommand(partyOn);

remote.setCommand(partyOnMacro);
remote.buttonWasPressed();
// remote.undoButtonWasPressed();
