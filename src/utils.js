/**
 * Shuffle the given array in place
 */
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const randomizer = () => {
  const numbers = [];

  const getRandom = () => {
    const number = Math.round(Math.random() * 100);

    if (numbers.indexOf(number) < 0) {
      numbers.push(number);
      return number;
    }
    return getRandom();
  }
  return getRandom;
}

export const getRandom = randomizer();


export const getGrid = (size) => {
  if (size % 2 !== 0) {
    throw new TypeError('Invalid size. Must be an even number.');
  }

  const values = [];
  for (let i = 0, l = size / 2; i < l; i++) {
    values[i] = getRandom();
  }

  const grid = []
    .concat(values)
    .concat(values);

  return shuffle(grid);
}

export const splitInLines = (size) => (acc, v) => {
  let last = acc[acc.length - 1];
  if (!last || last.length === size) {
    last = [v];
    acc.push(last);
  } else {
    last.push(v);
  }
  return acc;
}
