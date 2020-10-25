/**
 * the idea is to find the range which x will be present
 * and do binary search on that range
 * 2 step:
 *  1. find the range
 *  2. do binary search
 * 
 * how to find the range?
 * we do the loop (i) which i multiply by 2 until x < arr[i]
 * that means x will be in the range i/2 -> i
 * [1,4,6,8,9,20,49,80]
 * x = 49
 * i = 1
 * i = 2
 * i = 4
 * i = 8 => x <= arr[8] = 49
 * => do binary search  from i/2 = 4 to i = 8
 */

const binarySearch = (arr: number[], left: number, right: number, x: number) => {

  if (left <= right) {
    const mid = left + (right - left) / 2

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] < x) {
      return binarySearch(arr, mid + 1, right, x)
    }

    return binarySearch(arr, left, right - 1, x)
  }

  return false
}

const exponentialSearch = (arr: number[], x: number) => {

  if (arr[0] === x) {
    return 0;
  }

  let i = 1;
  while (i <= arr.length && arr[i] < x) {
    i *= 2
  }

  const left = i / 2
  const right = i

  return binarySearch(arr, left, right, x)
}

export default exponentialSearch