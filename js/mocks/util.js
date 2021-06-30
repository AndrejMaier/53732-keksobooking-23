
/**
 * Выбирает случайное число из диапазона с плавующей точкой
 *
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @param {number} decimal - количество чисел после запятой
 * @returns {number}
 */
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

/**
 * Выбирает случайное число из диапазона
 *
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @returns {number}
 */
const getRandom = (min, max) => getDecimalRandom(min, max, 0);

/**
 * Выбирает случайный элемент из массива
 *
 * @param {array} elements - массив со значения
 * @returns {string}
 */
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

/**
 * Возвращает копию массива со случайными значения
 *
 * @param {array} arr - массив со значениями
 * @returns {array}
 */
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
