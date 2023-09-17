import { ValueObject, IValueObject } from "./value-object";

type ValueType = undefined;

export class OmitValueObject extends ValueObject<ValueType> {
  constructor({ key, value }: IValueObject) {
    super({ key, value });
  }
}
