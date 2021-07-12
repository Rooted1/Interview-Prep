//Quick sort algorithm
//Given an arr of unsorted elements and a target value, return the sum of two elements of the arr that equals to the target

let arr = [2, 10, 5, 12, 6, 7, 8]

function quickSort(list, startPnt, endPnt){
  if(startPnt < endPnt){
    let partitionIndex = partition(list, startPnt, endPnt);

    quickSort(list, startPnt, partitionIndex - 1);
    quickSort(list, partitionIndex + 1, endPnt);
  }
  return list;
}

function partition(list, startPnt, endPnt){

  let pivot = list[endPnt];
  let i = startPnt-1;

  for(let j = startPnt; j <= endPnt - 1; j++){
    if (list[j] < pivot){
      i++;
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  [list[i+1], list[endPnt]] = [list[endPnt], list[i+1]];
  return i+1;
}

let array1 = [5, 8, 3, 9, 4, 1, 7];
let array2 = [-913743, 3241, 999999, 1243153, 0, 0, 99999999];
let array3 = [10, 9, 4, 5, 6, 7];
let array4 = [1, 2, 3, 0, 4-1, -2];
let array5 = [-1, 2, 2, -1];
let array6 = [1, 2, 1, 3, 5];
let array7 = [-1000000, 1000000];
let array8 = [5, 3, 1, -10, -11, -100];

quickSort(array1, 0, array1.length-1);
quickSort(array2, 0, array2.length-1);
quickSort(array3, 0, array3.length-1);
quickSort(array4, 0, array4.length-1);
quickSort(array5, 0, array5.length-1);
quickSort(array6, 0, array6.length-1);
quickSort(array7, 0, array7.length-1);
quickSort(array8, 0, array8.length-1);