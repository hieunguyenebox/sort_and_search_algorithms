/**
 * the idea is
 * divide array in to 2 halves
 * then we continue divide sub-array into 2 halves until sub-array has only 1 element
 * then we sort and merge 2 sub-array until back to a sorted array
 * [4,1,5,2,8,9]
 * => [4,1,5] [2,8,9]
 * => [4,1] [5] and [2,8] [9]
 * => [4] [1] and [5] and [2] [8] and [9]
 * => [1,4]
 * => [1,4] [5]
 *    => 1 < 5, add 1 to arr[k]
 *    => 4 < 5, add 5 to arr[k+1]
 *    => add the rest to arr, add 5 to arr[k+2]
 * => [1,4,5]
 * 
 * time: O(nLogn)
 * auxiliary space: O(n)
 * https://www.geeksforgeeks.org/merge-sort/
 */

const merge = (arr: number[], l: number, middle: number, r: number) => {

  const n1 = middle - l + 1// max length half left
  const n2 = r - middle  // maxlength half right

  //temp 2 halves array
  const arrLeft: number[] = [];
  const arrRight: number[] = []

  // copy half left array
  for (let i = 0; i < n1; i++) {
    arrLeft[i] = arr[l + i]
  }

  // copy half right array
  for (let j = 0; j < n2; j++) {
    arrRight[j] = arr[middle + 1 + j]
  }

  let i = 0
  let j = 0
  let k = l

  while (i < n1 && j < n2) {
    // compare every elements in left array to right array
    // and sequentially move smallest to the left to be an sorted array
    if (arrLeft[i] <= arrRight[j]) {
      arr[k] = arrLeft[i]
      i++
    } else {
      arr[k] = arrRight[j]
      j++
    }
    k++
  }


  // copy the rest element in left/right array
  // copy half left array
  while (i < n1) {
    arr[k] = arrLeft[i]
    i++
    k++
  }
  while (j < n2) {
    arr[k] = arrRight[j]
    j++
    k++
  }

}

const mergeSort = (arr: number[], l: number, r: number) => {

  if (l < r) {

    const middle = Math.floor(l + (r - l) / 2)

    // half left
    mergeSort(arr, l, middle)

    // half right
    mergeSort(arr, middle + 1, r)

    // merge back
    merge(arr, l, middle, r)
  }
}

export default mergeSort