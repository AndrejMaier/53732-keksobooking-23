function getRandom (min, max) {
  if (max <= min) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandom();

function getNonIntegerRandom (min, max, numberOfDecimal) {
  if (max <= min) {
    return 'У тебя ошибка в числах. Попробуй изменить числа.';
  }
  const NUMBER = Math.random() * (max - min) + min;
  return NUMBER.toFixed(numberOfDecimal);
}

getNonIntegerRandom();
