
// the idea is devide array to 3 parts instead of 2 parts like binary search
// mid1 = l + (r-l) / 3
/**
 * mid2 = r - (r-l) / 3
 * 
 * if (arr[mid1] === x) return mid1
 * if (arr[mid2] === x) return mid1
 * 
 * if x < arr[mid1], then recur the part left to mid1
 * if x > arr[mid2], then recure the part mid2 to right
 * otherwise, x lies in the center part between mid1 and mid2
 * 
 * O(Log n), worst case O(Log3 n) > O(Log2 n) (binary)
 */


const ternarySearch = (arr: number[], l: number, r: number, x: number) => {

  if (l <= r) {

    const mid1 = Math.floor(l + (r - l) / 3)
    const mid2 = Math.floor(r - (r - l) / 3)

    if (arr[mid1] === x) return mid1;
    if (arr[mid2] === x) return mid2;

    if (x < arr[mid1]) return ternarySearch(arr, l, mid1 - 1, x);
    if (x > arr[mid2]) return ternarySearch(arr, mid2 + 1, r, x);

    return ternarySearch(arr, mid1 + 1, mid2 - 1, x);
  }
  return false;
}

export default ternarySearch