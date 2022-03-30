export default interface IExistanceExtractor<T, E> {
  extract(value: T): E | Promise<E>;
}
