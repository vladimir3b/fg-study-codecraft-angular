type gender = 'male' | 'female';

interface IPerson {
  firstName: string;
  lastName: string;
  sex: gender;
  age: number;
}

interface IPersonFromCountry {
  countryName: string;
  persons: Array<IPerson>
}

export {
  gender,
  IPerson,
  IPersonFromCountry
}