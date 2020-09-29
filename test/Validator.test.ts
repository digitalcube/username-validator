import { UsernameValidator } from '../src/Validator';
import { InvalidUsernameError } from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/Validator', () => {
  describe('UsernameValidator class', () => {
    it.each(testCase)(
      'Given %p, should %p',
      (username, promiseResult, errorMessage) => {
        const target = new UsernameValidator(username);
        if (promiseResult === 'resolve') {
          expect(() => target.validate()).not.toThrowError();
        } else {
          expect(() => target.validate()).toThrowError(
            new InvalidUsernameError(errorMessage)
          );
        }
      }
    );
    describe('custom block lists', () => {
      const blockLists = ['hello', 'world', 'ggod', 'bye'];
      const testCase4BlockLists = blockLists.map(username => [
        username,
        'reject',
        `Username: ${username} is already exists.`,
      ]);
      it.each(blockLists)(
        'username is %p, should pass the validation when the list does not set',
        username => {
          const target = new UsernameValidator(username);
          expect(() => target.validate()).not.toThrowError();
        }
      );

      it.each([...testCase4BlockLists, ['user1234', 'resolve', '']])(
        'username is %p, should %p by %p',
        (username, behavior, errorMessage) => {
          const target = new UsernameValidator(username, {
            blockLists,
          });
          if (behavior === 'resolve') {
            expect(() => target.validate()).not.toThrowError();
          } else {
            expect(() => target.validate()).toThrowError(
              new InvalidUsernameError(errorMessage)
            );
          }
        }
      );
    });
  });
});
