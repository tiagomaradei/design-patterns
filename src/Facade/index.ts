import Amplifier from './Amplifier/Amplifier';
import DVDPlayer from './DVDPlayer/DVDPlayer';
import HomeTheaterFacade from './HomeTheaterFacade';
import Light from './Light/Light';
import PopCornMachine from './PopCornMachine/PopCornMachine';
import Projector from './Projector/Projector';
import Screen from './Screen/Screen';

const poper = new PopCornMachine();
const light = new Light();
const screen = new Screen();
const projector = new Projector();
const amplifier = new Amplifier();
const dvd = new DVDPlayer();

// Assistindo filme do modo dificil
// poper.on();
// light.dim(10);
// screen.down();
// projector.on();
// projector.setInput(dvd);
// projector.wideScreenMode();
// amplifier.on();
// amplifier.setDvd(dvd);
// amplifier.setStereoSound();
// amplifier.setVolume(5);
// dvd.on();
// dvd.play('Movie 123');

// Assintindo filme com a fachada
const homeTheaterFacade = new HomeTheaterFacade(
  amplifier,
  dvd,
  projector,
  light,
  screen,
  poper,
);

homeTheaterFacade.watchMovie('Titanic');
console.log('-----------------------');
homeTheaterFacade.endMovie();
