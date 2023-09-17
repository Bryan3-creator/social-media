import { InvalidArgumentError, Status } from "../exceptions";

type Primitives = string | number | boolean | undefined;

type Key = string;
type Value<T extends Primitives> = T;

export interface IValueObject<T extends Primitives> {
  key: Key;
  value: Value<T>;
}

export abstract class ValueObject<T extends Primitives> {
  private readonly _key: string;
  private readonly _value: T;
  constructor({ key, value }: IValueObject<T>) {
    this._key = key;
    this._value = value;
  }

  public getKey = (): Key => {
    return this._key;
  };

  public getValue = (): Value<T> => {
    return this._value;
  };

  protected _ensureValueIsDefined = ({
    key,
    value,
  }: {
    key: Ket;
    value: Value<T>;
  }): void => {
    if (value === undefined || value === null)
      throw new InvalidArgumentError({
        error: `${key} must be defined`,
        status: Status.BAD_REQUEST,
      });
  };
}
