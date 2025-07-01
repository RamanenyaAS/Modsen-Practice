interface IPerson {
  name: string;
  age: number;
}

function processData(person: IPerson): string;
function processData(persons: IPerson[]): number;
function processData(personOrPersons: IPerson | IPerson[]): string | number {
  if (Array.isArray(personOrPersons)) {
    return personOrPersons.length;
  } else {
    return `${personOrPersons.name}, ${personOrPersons.age} лет`;
  }
}