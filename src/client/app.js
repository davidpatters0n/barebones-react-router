import 'babel-polyfill';
import Person from '../shared/person';

const newPerson = new Person('DJ');

document.querySelector('.app').innerText = newPerson.hello();
