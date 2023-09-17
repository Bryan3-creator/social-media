export abstract class Entity<T, PrimitiveData>{
  abstract toPrimitives: () => PrimitiveData
}