export default interface IRepository<Entity> {
  save(item: Entity): void | Promise<void>;
}
