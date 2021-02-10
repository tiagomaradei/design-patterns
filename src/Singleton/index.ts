import Singleton from './Singleton';

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
const instance3 = Singleton.getInstance();

console.log(instance1.getFlag());
console.log(instance2.getFlag());
console.log(instance3.getFlag());

console.log('---------------------');

instance3.setFlag();
console.log(instance1.getFlag());
console.log(instance2.getFlag());
console.log(instance3.getFlag());
