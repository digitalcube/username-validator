import { validateUsername, UsernameValidator } from '../src/index';
import  {InvalidUsernameError} from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/validator/Username', () => {
  describe('validateUsername()', () => {
    it.each(testCase)('Given %p, should %p', async (username, promiseResult, errorMessage) => {
      const promiseTask = validateUsername(username);
      if (promiseResult === 'resolve') {
        await expect(promiseTask).resolves.not.toThrowError();
      } else {
        await expect(promiseTask).rejects.toThrowError(
          InvalidUsernameError,
        );
        await expect(promiseTask).rejects.toThrowError(
          errorMessage,
        );
      }
    });
  });
  describe('UsernameValidator class', () => {
    it.each(testCase)('Given %p, should %p', async (username, promiseResult, errorMessage) => {
      const c = new UsernameValidator(username);
      const promiseTask = c.validate();
      if (promiseResult === 'resolve') {
        await expect(promiseTask).resolves.not.toThrowError();
      } else {
        await expect(promiseTask).rejects.toThrowError(
          InvalidUsernameError,
        );
        await expect(promiseTask).rejects.toThrowError(
          errorMessage,
        );
      }
    });
  });
});
