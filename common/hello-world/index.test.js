import { jest } from '@jest/globals'
import { sayHello } from './index'

test('says hello', () => {
  const helloSue = sayHello('sue')
  expect(helloSue).toBe('Hello sue!')
})
