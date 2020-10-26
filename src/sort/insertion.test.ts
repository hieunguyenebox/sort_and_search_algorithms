
import insertionSort from "./insertion_sort"

test('Insertion sort', () => {
  const arr = [5, 1, 4, 2, 8]
  const expected = [...arr].sort((a, b) => a - b)
  insertionSort(arr)
  expect(arr).toEqual(expected)
})


test('Insertion sort 2', () => {
  const arr = [-1, -2, 0, 7]
  const expected = [...arr].sort((a, b) => a - b)
  insertionSort(arr)
  expect(arr).toEqual(expected)
})


test('Insertion sort 3', () => {
  const arr = [5, 1]
  const expected = [...arr].sort((a, b) => a - b)
  insertionSort(arr)
  expect(arr).toEqual(expected)
})

test('Insertion sort 4', () => {
  const arr = [4, 3, 2, 10, 5, 9, 17]
  const expected = [...arr].sort((a, b) => a - b)
  insertionSort(arr)
  expect(arr).toEqual(expected)
})