// // recursion

// function mergeSort (arr, l, r) {

//   if (l >= r) return;
//   let m = l + parseInt((r-l)/2);

//   // console.log('(1) l ', l, ' m ', m, ' r ', r);

//   mergeSort(arr, l, m);
//   mergeSort(arr, m+1, r);

//   merge(arr, l, m, r);

//   return arr;
// }

// function merge (arr, l, m, r){
//   let leftIndex = l;
//   let rightIndex = m + 1;

//   mergedArray = [];

//   while((leftIndex <= m) && (rightIndex <= r)){
//     if (arr[leftIndex] <= arr[rightIndex]){
//       mergedArray.push(arr[leftIndex]);
//       ++leftIndex;
//     }
//     else{
//       mergedArray.push(arr[rightIndex])
//       ++rightIndex
//     }
//   }
// }

// mergeSort([3,5,2,6,9,1], 0 , [3,5,2,6,9,1].length);

// // function printArray( A, size)
// // {
// //     for (var i = 0; i < size; i++)
// //        console.log(  A[i] + " ");
// // }
 
 
// // var arr = [9, 3, 1, 5];
// //     var arr_size = arr.length;
 
// //     // console.log(  "Given array is <br>");
// //     // printArray(arr, arr_size);
 
// //     mergeSort(arr, 0, arr_size - 1);
 
// //     console.log( "<br>Sorted array is <br>");
// //     printArray(arr, arr_size);





const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    twoProducts(Array.from(data.split('\n')));

});

//Solve using brute force
// function twoProducts (data){
//   let yr = 2020;
//   let product = 0;

//   for (let i = 0; i < data.length; i++){
//     for(j = i+1; j < data.length; j++){
//       if ((parseInt(data[i]) + parseInt(data[j])) == yr){
//         product = parseInt(data[i]) * parseInt(data[j]);
//       }
//     }
//   }
//   console.log(product);
// }


//solve using hashing
// function twoProducts (data) {
//   let yr = 2020;
//   let hashObj = {};

//   for (let i = 0; i < data.length; i++){
//     hashObj[i] = parseInt(data[i]);
//   }

//   for (let i in hashObj){
//     let num2 = yr - hashObj[i];
//     if(Object.values(hashObj).includes(num2) ){
//       console.log(hashObj[i] * num2, ' hashObj[i] ', hashObj[i])
//     }
//   }
// }

//solve using binary search
function twoProducts(data){
  let yr = 2020;
  let sortedData = data.sort(a, b) => a-b)
  console.log(sortedData);
}