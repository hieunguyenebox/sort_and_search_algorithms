
import selectionSort from "./selection_sort"

test('Selection sort', () => {
  const arr = [5, 1, 4, 2, 8]
  const expected = [...arr].sort((a, b) => a - b)
  selectionSort(arr)
  expect(arr).toEqual(expected)
})


test('Selection sort 2', () => {
  const arr = [-1, -2, 0, 7]
  const expected = [...arr].sort((a, b) => a - b)
  selectionSort(arr)
  expect(arr).toEqual(expected)
})


test('Selection sort 3', () => {
  const arr = [5, 1]
  const expected = [...arr].sort((a, b) => a - b)
  selectionSort(arr)
  expect(arr).toEqual(expected)
})