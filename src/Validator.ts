import {InvalidUsernameError} from './errors/InvalidUsernameError';
import reservedUsernameJSON from './reserved-usernames';
import { ValidatorOptions } from './interfaces';

/**
 * Simply username validator
 * @example
 * ```
 * import UsernameValidator from '/path/to/the/file';
 * const validateUsername = async (username: string) => {
 *   const validator = new UsernameValidator(username)
 *   try {
 *     await validator.validate()
 *     window.alert('OK!')
 *   } catch (e) {
 *     if (e instanceof InvalidUsernameError) {
 *       window.alert(e.message)
 *     } else {
 *       window.alert('Something wrong!')
 *     }
 *   }
 * }
 *
 * validateUsername('example_new_username')
 * ```
 */
export class UsernameValidator {
  private readonly username: string;
  private readonly blockLists: string[] = []

  constructor(username: string, options?:ValidatorOptions) {
    this.username = username;
    if (options && options.blockLists) {
      this.blockLists = options.blockLists
    }
  }

  /**
   * Get Digitalcube reserverd username lists
   */
  private async getReserverUsernames() {
    return reservedUsernameJSON;
  }

  private async isReserverdUsername() {
    if (this.blockLists.indexOf(this.username) !== -1) {
      throw new InvalidUsernameError(`Username: ${this.username} is already exists.`);
    }
    const reservedUsernames = await this.getReserverUsernames();
    if (reservedUsernames.indexOf(this.username) !== -1) {
      throw new InvalidUsernameError(`Username: ${this.username} is already exists.`);
    }
  }

  private isValidUsernameSyntax() {
    if (!/^[a-zA-Z0-9.\-_]{1,64}$/.test(this.username)) {
      throw new InvalidUsernameError(
        'Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_).',
      );
    }
  }

  /**
   * Validate New Username
   */
  async validate() {
    this.isValidUsernameSyntax();
    await this.isReserverdUsername();
  }
}