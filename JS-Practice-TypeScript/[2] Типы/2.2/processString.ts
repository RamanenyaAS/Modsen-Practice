function assertNever(x: never): never {
  throw new Error('Неожиданное значение: ' + x);
}

function processFruit(fruit: 'apple' | 'banana' | 'orange'): string {
  switch (fruit) {
    case 'apple':
      return 'Яблоко';
    case 'banana':
      return 'Банан';
    case 'orange':
      return 'Апельсин';
    default:
      return assertNever(fruit);
  }
}