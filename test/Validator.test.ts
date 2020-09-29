import { UsernameValidator } from '../src/Validator';
import  {InvalidUsernameError} from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/Validator', () => {
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
