// this is an improvement of binary search 
// this search may go to diffirent locations which not like binary go to the middle according to the value
// of the key being searched
// prev-condition: sorted array
// to get position , we use this fomrula:
/**
 * lo: starting index of array
 * hi: ending index of array
 * 
 * pos = lo + [ (x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]) ]
 * 
 */

const interpolationSearch = (arr: number[], x: number) => {
  const length = arr.length

  let lo = 0
  let hi = length - 1

  // since array is sorted
  // x must be in range from lo to hi
  while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {

    if (lo === hi) {
      if (x === arr[lo]) return lo;
      return false;
    }

    // A = (x-arr[lo]) / (arr[hi] - arr[lo]) <= 1
    // because if x exists in array, x will always < arr[hi]
    // hi - lo = distance from lo to hi
    // so lo + (A * distance) will be between lo to hi
    let pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]))
    pos = Math.floor(pos)

    if (arr[pos] === x) {
      return pos
    }

    // if x greater than value at pos, it means x lies in the right
    if (arr[pos] < x) {
      lo = pos + 1
    } else {
      hi = pos - 1
    }
  }

  return false;
}

export default interpolationSearch