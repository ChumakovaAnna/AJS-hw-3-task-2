export default function getPersonsHealthList(persons) {
  const newList = persons.sort((a, b) => (a.health < b.health ? 1 : -1));
  return newList;
}
