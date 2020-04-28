import getPersonsHealthList from '../basic';

describe('getPersonsHealthList', () => {
  test.each([
    [
      'empty arr',
      [],
      [],
    ],
    [
      'identical objects',
      [{ name: 'Mag', health: 10 }, { name: 'Thief', health: 10 }, { name: 'Warrior', health: 10 }],
      [{ name: 'Mag', health: 10 }, { name: 'Thief', health: 10 }, { name: 'Warrior', health: 10 }],
    ],
    [
      'different objects',
      [{ name: 'Mag', health: 10 }, { name: 'Thief', health: 50 }, { name: 'Warrior', health: 80 }],
      [{ name: 'Warrior', health: 80 }, { name: 'Thief', health: 50 }, { name: 'Mag', health: 10 }],
    ],
    [
      'different objects',
      [{ name: 'Warrior', health: 80 }, { name: 'Mag', health: 10 }, { name: 'Thief', health: 50 }],
      [{ name: 'Warrior', health: 80 }, { name: 'Thief', health: 50 }, { name: 'Mag', health: 10 }],
    ],
  ])('%s', (name, persons, expected) => {
    const result = getPersonsHealthList(persons);

    expect(result).toEqual(expected);
  });
});
