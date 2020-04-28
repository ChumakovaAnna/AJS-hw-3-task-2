export default function getPersonsHealthList(persons) {
  const newList = persons.sort((a, b) => b.health - a.health);
  return newList;
}
