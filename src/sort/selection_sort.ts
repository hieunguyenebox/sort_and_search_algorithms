/**
 * the idea is
 * find the min value and put it at the begining of the loop index
 * 
 * time: O(n^2)
 * space: O(1)
 */

const selectionSort = (arr: number[]) => {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i
    // find the position of the min value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }

    // swap min value
    const tmp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = tmp
  }
}

export default selectionSort
