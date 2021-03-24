import DinerMenu from './menu/DinerMenu';
import PancakeHouseMenu from './menu/PancakeHouseMenu';
import Waitress from './Waitress';

const pancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();
const waitress = new Waitress([pancakeHouseMenu, dinerMenu]);

waitress.printMenus();
