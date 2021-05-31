function getDecimalRandom (min, max, decimal) {
  if (min < 0 || max < 0) {
    throw 'Я не умею с такие цифрами работать';
  } else if (max < min) {
    [min, max] = [max, min];
  } else if (min === max) {
    throw 0;
  }
  const NUMBER = Math.random() * (max - min) + min;
  return Number(NUMBER.toFixed(decimal));
}

getDecimalRandom();

function getRandom (min, max) {
  return getDecimalRandom(min, max, 0);
}

getRandom();
