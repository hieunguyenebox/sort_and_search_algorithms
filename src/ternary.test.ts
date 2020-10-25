import ternarySearch from './ternary_search'

test('Ternary 1', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 49
  const expected = 6
  expect(ternarySearch(arr, 0, arr.length - 1, search)).toBe(expected)
})

test('Ternary 2', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 1
  const expected = 0
  expect(ternarySearch(arr, 0, arr.length - 1, search)).toBe(expected)
})

test('Ternary 3', () => {
  const arr = [1]
  const search = 1
  const expected = 0
  expect(ternarySearch(arr, 0, arr.length - 1, search)).toBe(expected)
})
test('Ternary 3', () => {
  const arr = [1]
  const search = 2
  const expected = false
  expect(ternarySearch(arr, 0, arr.length - 1, search)).toBe(expected)
})

test('Ternary 4', () => {
  const arr = [1, 4, 6, 8, 9, 20, 49, 80]
  const search = 81
  const expected = false
  expect(ternarySearch(arr, 0, arr.length - 1, search)).toBe(expected)
})