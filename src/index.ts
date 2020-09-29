import { UsernameValidator } from './Validator';
import { ValidationCallback, ValidatorOptions } from 'interfaces';
export * from './Validator';
export * from './interfaces';

/**
 * Simply wrapper of username validator
 * @param username
 * @param callback
 */
export const validateUsername = (
  username: string,
  options?: ValidatorOptions,
  callback?: ValidationCallback
): void | Promise<void> => {
  const validator = new UsernameValidator(username, options);
  try {
    validator.validate();
    if (callback && callback.succeeded) return callback.succeeded(username);
  } catch (e) {
    if (callback && callback.failed) return callback.failed(username, e);
    throw e;
  }
};
