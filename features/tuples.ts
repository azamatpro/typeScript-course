const drink = {
  color: 'brown',
  corbonated: false,
  sugar: 40,
};

// Type alias / Tuple definition
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', false, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
