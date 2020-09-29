import { UsernameValidator } from '../src/Validator';
import  {InvalidUsernameError} from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/Validator', () => {
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
