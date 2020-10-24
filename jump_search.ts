// the idea is to check fewer elements than linear search by jumping ahead by fixed steps
// example: [2, 3, 4, 10, 12, 40, 45, 47, 50]
/**
 * block size is 3, mean we jump ahead 2 position
 * search for 47
 * we jump from 0 to 3
 * we jump from 3 to 6
 * we jump from 6 to 9
 * becuase arr[9] greater than 47, so
 * we do linear search from 6
 * 
 * the optimal step value is sqrt(arr.length), because
 * if n = arr.length, m is the length of 1step you choose
 * and if the last block is greater than x(search value)
 * then we will have (n/m + m-1) comparasion
 * n/m = total block
 * m - 1 = total value to compare
 * so the (n/m + (m-1)) is minumum when m=sqrt(n)
 * n/sqrt(n)+(sqrt(n) - 1) = 2(sqrt(n)) - 1
 */


const jumpSearch = (arr: number[], x: number) => {

  const arrLength = arr.length
  // find total of blocks to jump
  let step = Math.floor(Math.sqrt(arrLength))
  let prev = 0;
  while (arr[Math.min(step, arrLength) - 1] < x) {
    prev = step
    step += Math.floor(Math.sqrt(arrLength))

    // end of array, not found
    if (prev >= arrLength) {
      return false
    }
  }

  // maybe this block has values greater than x but not equal :))
  while (arr[prev] < x) {
    prev += 1;

    // if prev jumpt to next block
    if (prev === Math.min(step, arrLength))
      return false;
  }
  // so we need to check equal
  if (arr[prev] === x) {
    return prev;
  }

  return false
}

export default jumpSearch