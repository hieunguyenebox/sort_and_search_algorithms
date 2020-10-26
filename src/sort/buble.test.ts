import bubleSort from "./buble_sort"

test('Buble sort', () => {
  const arr = [5, 1, 4, 2, 8]
  const expected = [...arr].sort((a, b) => a - b)
  bubleSort(arr)
  expect(arr).toEqual(expected)
})


test('Buble sort 2', () => {
  const arr = [-1, -2, 0, 7]
  const expected = [...arr].sort((a, b) => a - b)
  bubleSort(arr)
  expect(arr).toEqual(expected)
})


test('Buble sort 3', () => {
  const arr = [5, 1]
  const expected = [...arr].sort((a, b) => a - b)
  bubleSort(arr)
  expect(arr).toEqual(expected)
})