type gender = 'male' | 'female';

interface IPerson {
  firstName: string;
  lastName: string;
  sex: gender;
  age: number;
}

export {
  gender,
  IPerson
}