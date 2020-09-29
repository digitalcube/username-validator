export class InvalidUsernameError extends Error {
    constructor(message?: string) {
        super(message)
        Object.defineProperty(this, 'name', {
          configurable: true,
          enumerable: false,
          value: 'InvalidUsernameError',
          writable: true,
        });
        Object.setPrototypeOf(this, InvalidUsernameError.prototype)
    
      
    }
}

export const isInvalidUsernameError = (error: Error | InvalidUsernameError) : error is InvalidUsernameError => {
    return error.name === 'InvalidUsernameError'
}