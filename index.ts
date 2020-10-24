import binarySearch from "./binary_search"
import jumpSearch from "./jump_search"
import linearSearch from "./linear_search"

const arr: number[] = [2, 3, 4, 10, 12, 40, 45, 47, 50]

console.log('Search position of 47 in [2, 3, 4, 10, 12, 40, 45, 47, 50]')
console.log("Position of 47 at: ", binarySearch(arr, 0, arr.length - 1, 47))



console.log('Search position of 51 in [2, 3, 4, 10, 12, 40, 45, 47, 50]')
console.log("Position of 47 at: ", binarySearch(arr, 0, arr.length - 1, 51))



console.log(jumpSearch(arr, 47))
console.log(jumpSearch(arr, 3))
console.log(jumpSearch(arr, 90))


console.log(linearSearch(arr, 130))