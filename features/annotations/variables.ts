let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

//Arrays
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
let logString: (str: string) => void = function (str: string) {
  console.log(str);
};

// When to use type annotations
// 1) With functions that returns 'any' type
let json = '{"x": 5, "y": 10}';
let coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 5, y: 10}

// 2) When we declare a variable on one line
// and initialize it on another line
let words = ['red', 'green', 'blue'];
let foundRed: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') {
    foundRed = true;
  }
}
let year: number;
year = 2024;

// With variable whose type can not be inferred correctly
let numbers = [-12, -4, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
