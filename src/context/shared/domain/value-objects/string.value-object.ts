import { ValueObject, IValueObject } from "./value-object";

type ValueType = string

export class StringValueObject extends ValueObject<ValueType> {
  constructor({ key, value }: IValueObject<ValueType>) {
    super(value);
    this._ensureValueIsDefined({ key, value });
  }
}
