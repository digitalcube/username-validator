import { validateUsername, UsernameValidator } from '../src/index';
import  {InvalidUsernameError} from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/validator/Username', () => {
  describe('validateUsername()', () => {
    it.each(testCase)('Given %p, should %p', (username, promiseResult, errorMessage) => {
      if (promiseResult === 'resolve') {
        expect(() => validateUsername(username)).not.toThrowError();
      } else {
        expect(() => validateUsername(username)).toThrowError(
          InvalidUsernameError,
        );
        expect(() => validateUsername(username)).toThrowError(
          errorMessage,
        );
      }
    });
  });
  describe('UsernameValidator class', () => {
    it.each(testCase)('Given %p, should %p', (username, promiseResult, errorMessage) => {
      const c = new UsernameValidator(username);
      if (promiseResult === 'resolve') {
        expect(() => c.validate()).not.toThrowError();
      } else {
        expect(() => c.validate()).toThrowError(
          InvalidUsernameError,
        );
        expect(() => c.validate()).toThrowError(
          errorMessage,
        );
      }
    });
  });
});
