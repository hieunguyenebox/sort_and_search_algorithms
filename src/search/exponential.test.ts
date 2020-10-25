import exponentialSearch from "./exponential_search"

test('Exponential 1', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 49
  const expected = 6
  expect(exponentialSearch(arr, search)).toBe(expected)
})

test('Exponential 2', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 1
  const expected = 0
  expect(exponentialSearch(arr, search)).toBe(expected)
})

test('Exponential 3', () => {
  const arr = [1]
  const search = 1
  const expected = 0
  expect(exponentialSearch(arr, search)).toBe(expected)
})

test('Exponential 4', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 81
  const expected = false
  expect(exponentialSearch(arr, search)).toBe(expected)
})