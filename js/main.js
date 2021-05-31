function getDecimalRandom (min, max, decimal) {
  if (min < 0 || max < 0) {
    throw 'Я не умею с такие цифрами работать';
  } else if (max < min) {
    [min, max] = [max, min];
  } else if (min === max) {
    return min;
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(decimal));
}

getDecimalRandom(10, 50, 5);

function getRandom (min, max) {
  return getDecimalRandom(min, max, 0);
}

getRandom(5, 70);
