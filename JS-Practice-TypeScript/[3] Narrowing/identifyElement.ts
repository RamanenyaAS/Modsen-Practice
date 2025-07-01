function identifyElement(elem: number | string | object): string {
  if (typeof elem === 'number'){
    return 'Это число';
  } else if (typeof elem === 'string'){
    return 'Это строка';
  } else {
    return 'Это объект';
  }
}