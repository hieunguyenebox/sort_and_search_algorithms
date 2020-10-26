/**
 * the idea is:
 * go through the array
 * use a temporary vairable to keep value current element (arr[i])
 * compare every previous element and stop when meet the element smaller
 * if greater, we move that element to next
 * 
 * it is like the way you sort playing cards
 * the original statements: The array is virtually split
 * into a sorted and unsorted part. Values from unsorted part are picked
 * and placed at the correct position in the sorted part.
 * 
 * [4, 3, 2, 10, 5, 9, 17]
 * 
 */
const insertionSort = (arr: number[]) => {

  for (let i = 1; i < arr.length; i++) {

    const tempKey = arr[i]
    let j = i - 1

    // if prev value greater than current
    while (j >= 0 && arr[j] > tempKey) {
      arr[j + 1] = arr[j]
      j -= 1
    }

    arr[j + 1] = tempKey
  }
}

export default insertionSort
