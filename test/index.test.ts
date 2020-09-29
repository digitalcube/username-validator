import { validateUsername } from '../src/index';
import { InvalidUsernameError } from '../src/errors/InvalidUsernameError';
import { testCase } from './testCase';

describe('src/classes/validator/Username', () => {
  describe('validateUsername()', () => {
    it.each(testCase)(
      'Given %p, should %p',
      (username, promiseResult, errorMessage) => {
        if (promiseResult === 'resolve') {
          expect(() => validateUsername(username)).not.toThrowError();
        } else {
          expect(() => validateUsername(username)).toThrowError(
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
          expect(() => validateUsername(username)).not.toThrowError();
        }
      );

      it.each([...testCase4BlockLists, ['user1234', 'resolve', '']])(
        'username is %p, should %p by %p',
        (username, behavior, errorMessage) => {
          if (behavior === 'resolve') {
            expect(() =>
              validateUsername(username, { blockLists })
            ).not.toThrowError();
          } else {
            expect(() =>
              validateUsername(username, { blockLists })
            ).toThrowError(new InvalidUsernameError(errorMessage));
          }
        }
      );
      describe('custom callback', () => {
        const mockSucceeded = jest.fn();
        const mockFailed = jest.fn();
        const callValidator = (username: string) => {
          validateUsername(
            username,
            {},
            {
              succeeded: mockSucceeded,
              failed: mockFailed,
            }
          );
        };
        afterEach(() => {
          mockFailed.mockClear();
          mockSucceeded.mockClear();
        });
        it('should call succeeded when pass it', () => {
          callValidator('hello');
          expect(mockSucceeded).toHaveBeenCalledWith('hello');
          expect(mockFailed).toHaveBeenCalledTimes(0);
        });
        it('should call failed when failed it', () => {
          callValidator('test');
          expect(mockFailed).toHaveBeenCalledWith(
            'test',
            new InvalidUsernameError('Username: test is already exists.')
          );
          expect(mockSucceeded).toHaveBeenCalledTimes(0);
        });
      });
    });
  });
});
