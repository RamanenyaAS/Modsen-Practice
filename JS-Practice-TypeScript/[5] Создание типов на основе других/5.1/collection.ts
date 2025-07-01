interface ICollection<T> {
  add(item: string): void;
  remove(index: number): void;
  get(index: number): T | undefined;
}