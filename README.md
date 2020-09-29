# Username Validator

## Install

```bash
$ npm i -S @digitalcube/username-validator
```

## Usage

### In React Hook

```typescript
import { validateUsername, isInvalidUsernameError } from  '@digitalcube/username-validator'
const useUsernameValidator = (username: string) => {
    const [errorMessage, putErrorMessage] = useState('')
    useEffect(() => {
        try {
            validateUsername(username)
            putErrorMessage('')
        } catch (e) {
            if (isInvalidUsernameError(e)) {
                putErrorMessage(e.message)
            }
        }
    }, [username, putErrorMessage])
    return errorMessage
}
```

#### Custom username block lists

```typescript
import { validateUsername, isInvalidUsernameError } from  '@digitalcube/username-validator'
const additionalBlockLists = ['hello', 'world']
const useUsernameValidator = (username: string) => {
    const [errorMessage, putErrorMessage] = useState('')
    useEffect(() => {
        try {
            validateUsername(username, {blockLists: additionalBlockLists})
            putErrorMessage('')
        } catch (e) {
            if (isInvalidUsernameError(e)) {
                putErrorMessage(e.message)
            }
        }
    }, [username, putErrorMessage])
    return errorMessage
}
```

### JavaScript

```javascript
const {
    validateUsername
} = require('@digitalcube/username-validator')

const test = (username) => {
    try {
        validateUsername(username)
        console.log(`=== Validation succeeded ===`)
        console.log(`Username ${username} can use`)
    } catch (e) {
        console.error(`=== ${e.name} ===`)
        console.error(e.message)
    }
    console.log('\n')
}


test(new Array(65).fill('a').join(''))
test('test')
test('test1')
test('test2')
test('shifter')
test('hello')
test('i09Nxxpv%ZqJ')


=== InvalidUsernameError ===
Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_).


=== InvalidUsernameError ===
Username: test is already exists.


=== InvalidUsernameError ===
Username: test1 is already exists.


=== InvalidUsernameError ===
Username: test2 is already exists.


=== InvalidUsernameError ===
Username: shifter is already exists.


=== Validation succeeded ===
Username hello can use


=== InvalidUsernameError ===
Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_).

```