
// start with the leftmost and compare to one by one untill match
// the complexity is O(n)
const arr: number[] = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]

function linearSearch(arr: Array<number | string>, searchKey: number | string): boolean | number | string {

  for (let i = 0; i < arr.length; i++) {
    if (searchKey === arr[i]) {
      return arr[i]
    }
  }

  return false;
}


export default linearSearch