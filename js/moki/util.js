const getDecimalRandom = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    throw 'Я не умею с такие цифрами работать';
  } else if (max < min) {
    [min, max] = [max, min];
  } else if (min === max) {
    return min;
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(decimal));
};

const getRandom = (min, max) => getDecimalRandom(min, max, 0);

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const getRandomArray = (arr) => {
  const countElement = getRandom(1, arr.length);
  const newArray = [];
  while (newArray.length < countElement) {
    const element = getRandomArrayElement(arr);
    !newArray.includes(element) ? newArray.push(element) : newArray;
  }
  return newArray;
};

export {getDecimalRandom, getRandom, getRandomArrayElement, getRandomArray};
