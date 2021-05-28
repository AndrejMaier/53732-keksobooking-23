function getRandom (min, max) {
  if (max <= min) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandom(40, 40);

function getNonIntegerRandom (min, max, numberOfDecimal) {
  const number = Math.random() * (max - min) + min;
  return number.toFixed(numberOfDecimal);
}

getNonIntegerRandom();
