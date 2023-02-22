import { expect, test } from 'vitest'

test('O usuário deve conseguir criar uma nova transação', () => {
  const responseCode = 201

  expect(responseCode).toEqual(201)
})
