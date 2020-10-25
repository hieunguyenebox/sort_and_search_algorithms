import stoogeSort from "./stooge_sort"

test('Stooge 1', () => {
  const arr = [2, 10, 5, 13, 6, 2, 1, 4, 8, 9]
  const expected = [...arr].sort((a, b) => a - b)
  stoogeSort(arr, 0, arr.length - 1)
  expect(arr).toEqual(expected)
})

test('Stooge 2', () => {
  const arr = [2, 10, 5]
  const expected = [...arr].sort((a, b) => a - b)
  stoogeSort(arr, 0, arr.length - 1)
  expect(arr).toEqual(expected)
})

test('Stooge 3', () => {
  const arr = [10, 5]
  const expected = [...arr].sort((a, b) => a - b)
  stoogeSort(arr, 0, arr.length - 1)
  expect(arr).toEqual(expected)
})