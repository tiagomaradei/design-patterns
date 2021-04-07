import GumballMachine from './GumballMachine';

const gumballMachine = new GumballMachine(3);
console.log(gumballMachine.getState());

console.log('-------------------------');
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.getState());

console.log('-------------------------');
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log('-------------------------');
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.getState());
