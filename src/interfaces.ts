
import {InvalidUsernameError} from './errors/InvalidUsernameError';

export type ValidationCallback = {
    succeeded?: (username: string) => void | Promise<void>;
    failed?: (username: string, error: Error | InvalidUsernameError) => void | Promise<void>;
  };

  
  export type ValidatorOptions = {
      blockLists?: string[]
  }