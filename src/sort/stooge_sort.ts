
/**
 * the idea is:
 * 1. compare the first and last position, swap if first  < last
 * 2. do recursive sort:
 *  a. recur the first 2/3 of length of array
 *  b. recur the last 2/3 of length of array
 *  c. recur again the first 2/3 to confirm
 * 
 * this sort is very slow, O(n^2.709)
 */
const stoogeSort = (arr: number[], left: number, right: number) => {

  if (arr[left] > arr[right]) {
    // const tmp = arr[left]
    arr[left] = arr[left] + arr[right]
    arr[right] = arr[left] - arr[right]
    arr[left] = arr[left] - arr[right]
  }

  // only recur if there are still 2 items
  if (right - left >= 2) {

    // step a, distance left to right divide by 3
    const onepart = Math.round((right - left) / 3)
    stoogeSort(arr, left, right - onepart)

    // step b
    stoogeSort(arr, left + onepart, right)

    // step c
    stoogeSort(arr, left, right - onepart)
  }
}

export default stoogeSort
