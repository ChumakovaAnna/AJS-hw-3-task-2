import getPersonsHealthList from './basic';

console.log('worked');

const persons = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(getPersonsHealthList(persons));
