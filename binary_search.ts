// based on sorted array, binary search reduce the time complexity to O(Log n)
// pre-condition: the array must be sorted

/**
 * 1. compare x to the middle value between left and right of array,
 * note that: the length of left and right are not always equal
 * we start witth leftmost and rightmost position
 * 2. if equal, return, if not
 * 3. if greater than middle, x can only be in the right half array, so recur the right half array
 * 4. if less than middle, x can only be in the left, we do the same as right
 * 5. if left > right, mean that we search all array 
 */

const arr1 = [2, 3, 4, 10, 12, 40, 45, 47, 50]

// left 3 right 4
// x= 45
// m=12
// m=40

const binarySearch = (arr: number[], left: number, right: number, x: number) => {

  // right index always greather than left index
  // if right less than left, it mean 
  if (right > left) {
    // half distance from left to right
    const halfDistance = Math.floor((right - left) / 2)
    const middle = halfDistance + left

    if (arr[middle] === x) {
      return middle
    }

    // if x is in left side
    if (arr[middle] > x) {
      return binarySearch(arr, left, middle - 1, x)
    }

    return binarySearch(arr, middle + 1, right, x)
  }
  return 'not found'

}

console.log('Search position of 47 in [2, 3, 4, 10, 12, 40, 45, 47, 50]')
console.log("Position of 47 at: ", binarySearch(arr1, 0, arr1.length - 1, 47))



console.log('Search position of 51 in [2, 3, 4, 10, 12, 40, 45, 47, 50]')
console.log("Position of 47 at: ", binarySearch(arr1, 0, arr1.length - 1, 51))