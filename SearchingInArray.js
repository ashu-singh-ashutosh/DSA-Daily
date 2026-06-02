//  to create an array and search for an element in an array.
let arr = [12, 23, 3, 45, 6];
function SearchElement(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
let result = SearchElement(arr, 6);
console.log(result);
