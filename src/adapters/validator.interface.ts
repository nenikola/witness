export default interface IValidator<Entity> {
  valid: (item: Entity) => void;
}
