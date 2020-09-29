# Username Validator

## Install

```bash
$ npm i -S @digitalcube/username-validator
```

## Usage

```typescript
import { validateUsername } from  '@digitalcube/username-validator'
const useUsernameValidator = (username: string) => {
    const [errorMessage, putErrorMessage] = useState('')
    useEffect(() => {
        try {
            validateUsername(username)
            putErrorMessage('')
        } catch (e) {
            putErrorMessage(e.messaeg)
        }
    }, [username, putErrorMessage])
    return errorMessage
}
```

### Custom username block lists

```typescript
import { validateUsername } from  '@digitalcube/username-validator'
const additionalBlockLists = ['hello', 'world']
const useUsernameValidator = (username: string) => {
    const [errorMessage, putErrorMessage] = useState('')
    useEffect(() => {
        try {
            validateUsername(username, {blockLists: additionalBlockLists})
            putErrorMessage('')
        } catch (e) {
            putErrorMessage(e.messaeg)
        }
    }, [username, putErrorMessage])
    return errorMessage
}
```