export const testCase: Array<[string, 'resolve' | 'reject', string]> = [
    ['example', 'reject', "Username: example is already exists."],
    ['shifter-development', 'resolve', ''],
    ['user1234', 'resolve', ''],
    ['user_-1.23', 'resolve', ''],
    ['username1234!"#$$', 'reject',  "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."],
    [new Array(64).fill('a').join(''), 'resolve', ''],
    [new Array(65).fill('a').join(''), 'reject', "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."],
  ];
  