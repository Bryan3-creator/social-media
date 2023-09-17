import { ErrorException } from "./error.exception";

export class InvalidArgumentErrorException extends ErrorException {
  constructor({ error, status }) {
    super({ error, status });
  }
}
