/**
 *  the idea is we move the greater number to the rightmost sequentially
 *  [5, 1, 4, 2, 8]
 * 
 * the time complexity is O(n^2)
 * 
 */

const swap = (a: number, b: number) => {
  a = a + b
  b = a - b
  a = a - b

  return { a, b }
}

const bubleSort = (arr: number[]) => {

  // [5, 1, 4, 2, 8]
  for (let i = 0; i < arr.length - 1; i++) {
    // we minus arr.length to i because elements from i to arr.length - 1 are sorted
    let swapped = false // this is to reduce 
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true
        const { a, b } = swap(arr[j], arr[j + 1])
        arr[j] = a
        arr[j + 1] = b
      }
    }

    if (!swapped) {
      return;
    }
  }
}

export default bubleSort