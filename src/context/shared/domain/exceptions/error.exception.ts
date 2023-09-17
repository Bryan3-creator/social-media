export enum Status {
  "BAD_REQUEST" = 400,
  "NOT_FOUND" = 404,
}

export type ErrorMessage = string;

interface IError {
  error: string;
  status: Status;
}

export class ErrorException extends Error {
  private readonly _error: ErrorMessage;
  private readonly _status: Status;
  constructor({ error, status }: IError) {
    super(error);
    this._error = error;
    this._status = status;
  }

  public getError = (): ErrorMessage => {
    return this._error;
  };

  public getStatus = (): Status => {
    return this._status;
  };

  static create = ({ error, status }: IError): ErrorException => {
    return new ErrorException({ error, status });
  };
}
