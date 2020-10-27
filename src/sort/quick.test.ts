
import sort from "./quick_sort"

test('Quick sort', () => {
  const arr = [5, 1, 4, 2, 8]
  const expected = [...arr].sort((a, b) => a - b)
  sort(arr, 0, arr.length - 1)
  expect(arr).toEqual(expected)
})


test('Quick sort', () => {
  const arr = [1, 3, 4, 5, 1.5, 2]
  const expected = [...arr].sort((a, b) => a - b)
  sort(arr, 0, arr.length - 1)
  expect(arr).toEqual(expected)
})


// test('Merge sort 2', () => {
//   const arr = [-1, -2, 0, 7]
//   const expected = [...arr].sort((a, b) => a - b)
//   sort(arr, 0, arr.length - 1)
//   expect(arr).toEqual(expected)
// })


// test('Merge sort 3', () => {
//   const arr = [5, 1]
//   const expected = [...arr].sort((a, b) => a - b)
//   sort(arr, 0, arr.length - 1)
//   expect(arr).toEqual(expected)
// })

// test('Merge sort 4', () => {
//   const arr = [4, 3, 2, 10, 5, 9, 17]
//   const expected = [...arr].sort((a, b) => a - b)
//   sort(arr, 0, arr.length - 1)
//   expect(arr).toEqual(expected)
// })