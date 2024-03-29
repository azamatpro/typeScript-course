const carMakers = ['ford', 'tayota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with map, filter, forEach
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push(new Date());
importantDates.push('2030-10-10');
