let fns = require('./Utils/Functions')

test('"brobrobro" should return true', () => {
  let result = fns.usernameCheck('brobrobro')
  expect(result).toBeTruthy()
})