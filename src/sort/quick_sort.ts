
/**
 * the idea is
 * partition is to move the greater value to the right side of pivot value
 * and move the smaller value to the left side of pivot
 * 
 */

const partition = (arr: number[], l: number, r: number): number => {

  const pivot = arr[r]

  let i = l - 1

  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      // swap
      i++
      let tmp = arr[j]
      arr[j] = arr[i]
      arr[i] = tmp
    }
  }
  const tmp = arr[i + 1]
  arr[i + 1] = arr[r]
  arr[r] = tmp

  // console.log(arr)

  return i + 1
}

const quick_sort = (arr: number[], l: number, r: number) => {

  if (l < r) {
    const p = partition(arr, l, r)
    quick_sort(arr, l, p - 1)
    quick_sort(arr, p + 1, r)
  }
}

export default quick_sort