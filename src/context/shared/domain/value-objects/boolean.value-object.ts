import { ValueObject, IValueObject } from "./value-object";

 type ValueType = boolean;

export class BoolValueObject extends ValueObject<ValueType> {
  constructor({ key, value }: IValueObject<ValueType>) {
    super(value);
    this._ensureValueIsDefined({ key, value });
  }
}
