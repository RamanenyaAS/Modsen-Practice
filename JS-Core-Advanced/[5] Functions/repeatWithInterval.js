function repeatWithInterval(callback, interval) {
  if(typeof callback !== 'function') {
    throw new Error('Первый аргумент должен быть функцией');
  }
  if(typeof interval !== 'number' || interval <= 0) {
    throw new Error('Интервал должен быть положительным числом');
  }
  return setInterval(callback, interval);
}