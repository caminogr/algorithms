/**
 * @param {array} array - target Array
 * @param {int} start - start index
 * @param {int} end - end index
 */
function qucicksort(array, start, end) {
  if (end - start < 2) {
    return;
  }

  const pivot_index = Math.floor((start + end)/2);
  const pivot_value = array[pivot_index];
  let left = start;
  let right = end;

  while(left < right) {
    while (array[left]<pivot_value) left++;
    while (array[right]>pivot_value) right--
    if (array[left] === array[right]) break;
    if (left<right) {
      swap(array, left, right)
    } else {
      break;
    }
  }

  if(array[right] > pivot_value) {
    qucicksort(array, start, right - 1);
    qucicksort(array, right, end);
  }else if(array[right] < pivot_value) {
    qucicksort(array, start, right);
    qucicksort(array, right + 1, end);
  }else {
    qucicksort(array, start, right - 1);
    qucicksort(array, right + 1, end);
  }
  return array;
}

/**
 * @param {array} array - target Array
 * @param {int} start - start index
 * @param {int} end - end index
 */
function swap (array, left, right) {
  const tmp = array[left];
  array[left] = array[right];
  array[right] = tmp;
}

let arr = [4,21,5,12,6,2, 5];
arr = qucicksort(arr, 0, arr.length-1)
console.log(arr)
