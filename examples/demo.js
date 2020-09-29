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
