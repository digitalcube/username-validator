# Username Validator

## usage

```typescript
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