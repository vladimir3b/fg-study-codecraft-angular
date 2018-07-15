export default function greet(name: string): string {
  return `Hello, ${name}!!!`;
}

function minimum(...numbers: Array<number>) {
  let minimum: number = numbers[0];
  numbers.forEach((value: number): void => {
    minimum = minimum < value ? minimum : value;
  });
  return minimum;
}

function maximum(...numbers: Array<number>) {
  let maximum: number = numbers[0];
  numbers.forEach((value: number): void => {
    maximum = maximum > value ? maximum : value;
  });
  return maximum;
}

function square(x: number): number {
  return x * x;
}

function cube(x: number): number {
  return square(x) * x;
}

export {
  minimum,
  maximum,
  square,
  cube
}