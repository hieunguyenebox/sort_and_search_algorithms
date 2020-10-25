import interpolationSearch from "./interpolation_search"

test('Interpolation Search', () => {
  const arr = [0, 1, 3, 4, 5, 10, 90, 100]
  const expected = 5
  expect(interpolationSearch(arr, 10)).toBe(expected)
})

test('Interpolation Search', () => {
  const arr = [0, 1, 3, 4, 5, 10, 90, 100]
  const expected = false
  expect(interpolationSearch(arr, 101)).toBe(expected)
})

test('Interpolation Search', () => {
  const arr = [0, 1]
  const expected = 1
  expect(interpolationSearch(arr, 1)).toBe(expected)
})
test('Interpolation Search', () => {
  const arr = []
  expect(interpolationSearch(arr, 10)).toBe(false)
})
test('Interpolation Search', () => {
  const arr = [1]
  expect(interpolationSearch(arr, 1)).toBe(0)
})