import { ValueObject, IValueObject } from "./value-object";

type ValueType = number;

interface Params {
  key: string,
}

export class IntValueObject extends ValueObject<ValueType> {
  constructor({ key, value }: IValueObject<ValueType> ) {
    super(value);
    this._ensureValueIsDefined({ key, value });
  }
}
